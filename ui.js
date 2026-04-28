// ui.js
const UI = {
    setActiveTab(view) {
        document.getElementById('nav-explorer').classList.toggle('is-active', view === 'explorer');
        document.getElementById('nav-test').classList.toggle('is-active', view === 'test');
    },

    updateExplorerMetrics(data) {
        const categories = new Set(data.map(item => item.cat));
        const subCategories = new Set(data.map(item => item.sub));

        document.getElementById('metric-skills').innerText = data.length;
        document.getElementById('metric-domains').innerText = categories.size;
        document.getElementById('metric-subdomains').innerText = subCategories.size;
    },

    renderCategoryFilter(data, currentFilter) {
        const select = document.getElementById('category-filter');
        const categories = [...new Set(data.map(item => item.cat))].sort((a, b) => a.localeCompare(b));

        select.innerHTML = [
            '<option value="all">Toutes les catégories</option>',
            ...categories.map(category => `<option value="${category}">${category}</option>`)
        ].join('');

        select.value = currentFilter;
    },

    setNameError(message) {
        const input = document.getElementById('user-name-input');
        const error = document.getElementById('user-name-error');
        error.innerText = message;
        input.setAttribute('aria-invalid', message ? 'true' : 'false');
        input.classList.toggle('is-error', Boolean(message));
    },

    // Updates the progress bar
    updateProgress(current, total) {
        const percent = Math.round((current / total) * 100);
        document.getElementById('progress-bar').style.width = percent + "%";
        document.getElementById('progress-text').innerText = `Competence ${current + 1} / ${total}`;
        document.getElementById('assessment-back-button').disabled = current === 0;
    },

    // Renders a single question card
    renderQuestionCard(skill) {
        document.getElementById('q-category').innerText = skill.cat;
        document.getElementById('q-sub').innerText = skill.sub;
        document.getElementById('q-title').innerText = skill.skill.split(' ').slice(1).join(' ');
        document.getElementById('q-description').innerText = skill.description || '';
        document.getElementById('q-tools').innerText = skill.tools;
        document.getElementById('q-situation').innerText = skill.situation;
    },

    renderScoreList(averages) {
        const container = document.getElementById('results-score-list');
        const entries = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]));

        container.innerHTML = entries.map(([label, value]) => {
            const score = Number(value);
            const width = Math.max(8, Math.min(100, (score / 4) * 100));

            return `
                <div class="score-row">
                    <div class="score-header">
                        <span class="score-name">${label}</span>
                        <span class="score-value">${score.toFixed(2)} / 4</span>
                    </div>
                    <div class="score-bar"><div class="score-bar-fill" style="width: ${width}%"></div></div>
                </div>
            `;
        }).join('');
    },

    renderProfileSummary(cards) {
        const container = document.getElementById('profile-summary-grid');
        container.innerHTML = cards.map(card => `
            <article class="profile-summary-card profile-summary-card-${card.tone}">
                <div class="profile-summary-head">
                    <span class="pill">${card.label}</span>
                    ${card.tone !== 'weak' ? `<span class="profile-score-pill">${Number(card.score).toFixed(2)} / 4</span>` : ''}
                </div>
                ${card.tone !== 'weak' ? `
                <h3 class="result-title">${card.title}</h3>
                <p class="result-lead">${card.desc}</p>
                <div class="score-bar profile-score-bar"><div class="score-bar-fill" style="width: ${Math.max(8, Math.min(100, (Number(card.score) / 4) * 100))}%"></div></div>
                <div class="result-body">
                    <div class="category-label"><strong>Catégorie :</strong> ${card.category}</div>
                    <div class="inline-card"><strong>Mission :</strong> ${card.mission}</div>
                </div>
                ` : `
                <div class="result-body-weak">
                    <div class="weak-score-display">
                        <span class="profile-score-pill">${Number(card.score).toFixed(2)} / 4</span>
                    </div>
                    <h3 class="result-title-weak">${card.category}</h3>
                    <p class="result-lead">${card.desc}</p>
                    <div class="improvement-section">
                        <h4 class="improvement-title">Comment progresser</h4>
                        <p class="improvement-text"><strong>Domaine :</strong> ${card.improve}</p>
                        <p class="improvement-text"><strong>Pourquoi :</strong> ${card.improveWhy}</p>
                    </div>
                    <div class="mission-box">
                        <h4 class="mission-title">Exemple de mission pour progresser</h4>
                        <p class="mission-text">${card.improveMission}</p>
                    </div>
                </div>
                `}
            </article>
        `).join('');
    },

    toggleAccordionById(id) {
        const button = document.getElementById(`accordion-header-${id}`);
        const panel = document.getElementById(`accordion-panel-${id}`);
        if (!button || !panel) return;

        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        panel.classList.toggle('is-hidden', expanded);
    },

    setModalOpen(isOpen) {
        document.getElementById('modal').classList.toggle('is-hidden', !isOpen);
    },

    // Renders the Radar Chart (Logic moved from your old showResults)
    renderChart(labels, userValues, benchmarkValues, existingChart = null) {
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (existingChart) existingChart.destroy();
        
        // Split long labels into two lines
        const processedLabels = labels.map(label => {
            if (label.length > 12) {
                const words = label.split(' ');
                const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
                const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
                return [firstLine, secondLine];
            }
            return label;
        });
        
        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: processedLabels,
                datasets: [
                    {
                        label: 'Vous',
                        data: userValues,
                        borderColor: '#075985',
                        backgroundColor: 'rgba(7, 89, 133, 0.12)',
                        pointBackgroundColor: '#075985',
                        pointBorderColor: '#ffffff',
                        pointHoverBackgroundColor: '#0284c7'
                    },
                    {
                        label: 'Moyenne PM',
                        data: benchmarkValues,
                        borderColor: '#94a3b8',
                        backgroundColor: 'rgba(148, 163, 184, 0.08)',
                        borderDash: [6, 6],
                        pointBackgroundColor: '#94a3b8'
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 12,
                            color: '#52525b',
                            font: { family: 'Inter', size: 12, weight: '600' }
                        }
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 4,
                        ticks: {
                            stepSize: 1,
                            backdropColor: 'transparent',
                            color: '#71717a'
                        },
                        grid: { color: '#e4e4e7' },
                        angleLines: { color: '#e4e4e7' },
                        pointLabels: {
                            color: '#09090b',
                            font: { family: 'Inter', size: 11, weight: '600' },
                            padding: 12
                        }
                    }
                }
            }
        });
    }
};