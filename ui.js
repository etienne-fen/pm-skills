// ui.js
const UI = {
    setActiveTab(view) {
        document.getElementById('nav-explorer').classList.toggle('is-active', view === 'explorer');
        document.getElementById('nav-test').classList.toggle('is-active', view === 'test');
    },

    updateExplorerMetrics(data) {
        const categories = new Set(data.map(item => item.cat));
        const subCategories = new Set(data.map(item => item.sub));

        document.getElementById('metric-skills').textContent = data.length;
        document.getElementById('metric-domains').textContent = categories.size;
        const subEl = document.getElementById('metric-subdomains');
        if (subEl) subEl.textContent = subCategories.size;
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
        error.textContent = message;
        input.setAttribute('aria-invalid', message ? 'true' : 'false');
        input.classList.toggle('is-error', Boolean(message));
    },

    // Updates the progress bar
    updateProgress(current, total) {
        const percent = Math.round((current / total) * 100);
        document.getElementById('progress-bar').style.width = percent + "%";
        document.getElementById('progress-text').textContent = `Competence ${current + 1} / ${total}`;
        document.getElementById('assessment-back-button').disabled = current === 0;
    },

    // Renders a single question card
    renderQuestionCard(skill) {
        document.getElementById('q-category').textContent = skill.cat;
        document.getElementById('q-sub').textContent = skill.sub;
        document.getElementById('q-title').textContent = skill.skill.split(' ').slice(1).join(' ');
        document.getElementById('q-description').textContent = skill.description || '';
        document.getElementById('q-tools').textContent = skill.tools;
        document.getElementById('q-situation').textContent = skill.situation;
    },

    renderScoreList(averages, skillsByCategory, userRatings, benchmarks) {
        const container = document.getElementById('results-score-list');
        const entries = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]));
        const chevronSvg = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        container.innerHTML = entries.map(([label, value], index) => {
            const score = Number(value);
            const width = Math.max(4, Math.min(100, (score / 4) * 100));
            const shortLabel = label.replace(/^\d+\.\s*/, '');
            const tier = score >= 3.5 ? 'top' : score >= 2.5 ? 'high' : score >= 1.5 ? 'mid' : 'low';
            const rowDelay = index * 65;
            const barDelay = rowDelay + 180;

            const benchScore = benchmarks?.[label] ?? null;
            const benchPct = benchScore !== null ? Math.max(0, Math.min(100, (benchScore / 4) * 100)) : null;
            const benchMark = benchPct !== null
                ? `<span class="score-bar-bench" style="left:${benchPct}%" data-label="Moy. ${Number(benchScore).toFixed(1)}"></span>`
                : '';

            const skills = skillsByCategory?.[label] ?? [];
            const arrowIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            const skillRows = skills.map(skill => {
                const rating = Number(userRatings?.[skill.id]) || 0;
                const skillName = skill.skill.replace(/^[\d.]+ /, '');
                const subName = skill.sub.replace(/^[\d.]+ /, '');
                const dots = [1, 2, 3, 4].map(d =>
                    `<span class="rating-dot${d <= rating ? ` is-filled tier-${tier}` : ''}"></span>`
                ).join('');
                return `<div class="skill-detail-row" onclick="openModalById('${skill.id}')">
                    <span class="skill-detail-name">${skillName}</span>
                    <span class="skill-detail-sub">${subName}</span>
                    <div class="skill-detail-dots">${dots}</div>
                    <span class="skill-detail-arrow">${arrowIcon}</span>
                </div>`;
            }).join('');

            return `<div class="score-row" style="animation-delay:${rowDelay}ms">
                <button class="score-row-trigger" aria-expanded="false" onclick="UI.toggleScoreDetail(this)">
                    <div class="score-header">
                        <span class="score-name">${shortLabel}</span>
                        <div class="score-header-right">
                            <span class="score-badge score-badge--${tier}">${score.toFixed(2)}<span class="score-denom"> / 4</span></span>
                            <span class="score-chevron">${chevronSvg}</span>
                        </div>
                    </div>
                    <div class="score-bar-wrap">
                        <div class="score-bar"><div class="score-bar-fill score-bar-fill--${tier}" style="--tw:${width}%;animation-delay:${barDelay}ms"></div></div>
                        ${benchMark}
                    </div>
                </button>
                <div class="score-detail"><div class="skill-detail-list">${skillRows}</div></div>
            </div>`;
        }).join('');
    },

    toggleScoreDetail(trigger) {
        const detail = trigger.closest('.score-row').querySelector('.score-detail');
        const isOpen = detail.classList.contains('is-open');
        detail.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
        trigger.querySelector('.score-chevron').classList.toggle('is-rotated', !isOpen);
    },

    renderProfileSummary(cards) {
        const container = document.getElementById('profile-summary-grid');
        container.innerHTML = cards.map(card => {
            const score = Number(card.score);
            const shortCat = card.category.replace(/^\d+\.\s*/, '');
            const scorePill = `<span class="profile-score-pill">${score.toFixed(2)} / 4</span>`;

            if (card.tone !== 'weak') {
                return `
                <article class="profile-summary-card profile-summary-card-${card.tone}">
                    <div class="profile-summary-head">
                        <span class="pill">${card.label} : ${card.title}</span>
                        ${scorePill}
                    </div>
                    <p class="profile-category-tag">${shortCat}</p>
                    <p class="result-lead">${card.desc}</p>
                    <div class="inline-card"><strong>Mission :</strong> ${card.mission}</div>
                </article>`;
            } else {
                return `
                <article class="profile-summary-card profile-summary-card-weak">
                    <div class="profile-summary-head">
                        <span class="pill">${card.label} : ${shortCat}</span>
                        ${scorePill}
                    </div>
                    <div class="improvement-section">
                        <h4 class="improvement-title">Comment progresser</h4>
                        <p class="improvement-text"><strong>Domaine :</strong> ${card.improve}</p>
                        <p class="improvement-text"><strong>Pourquoi :</strong> ${card.improveWhy}</p>
                    </div>
                    <div class="mission-box">
                        <h4 class="mission-title">Exemple de mission pour progresser</h4>
                        <p class="mission-text">${card.improveMission}</p>
                    </div>
                </article>`;
            }
        }).join('');
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
                        borderColor: '#2D2B6B',
                        backgroundColor: 'rgba(45, 43, 107, 0.13)',
                        pointBackgroundColor: '#2D2B6B',
                        pointBorderColor: '#ffffff',
                        pointHoverBackgroundColor: '#00B2B2'
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