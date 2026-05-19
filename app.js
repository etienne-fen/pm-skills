// --- CONFIGURATION ---
const CONFIG = {
    // URL to fetch skill data (Google Sheet JSON endpoint)
    DATA_SOURCE_URL: "https://docs.google.com/spreadsheets/d/1V2qLH8z9XrNa9IvuHqUSbLqUxVrYUJxv/gviz/tq?tqx=out:json&gid=2147291852",
    // Your Google Apps Script URL for saving results
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyIEkYOOkI1Ib4w4V1gHCREzhOOQ71IgewiBnQt0ZxU7Wh8WXvlIJEpENKE6rHqlKU/exec"
};

// --- 1. DATA LOADING (API) ---
async function loadSkillsFromSheet() {
    AppState.explorerData = await ApiService.fetchSkills(CONFIG.DATA_SOURCE_URL, explorerData);
    UI.updateExplorerMetrics(AppState.explorerData);
    UI.renderCategoryFilter(AppState.explorerData, AppState.currentFilter);
    renderExplorer();
}

// --- 2. NAVIGATION & UI ---
function switchTab(view) {
    const homePage = document.getElementById('home-page');
    const appShell = document.getElementById('app-shell');

    if (view === 'home') {
        homePage.classList.remove('is-hidden');
        appShell.classList.add('is-hidden');
        return;
    }

    homePage.classList.add('is-hidden');
    appShell.classList.remove('is-hidden');

    UI.setActiveTab(view);
    document.getElementById('view-explorer').classList.toggle('is-hidden', view !== 'explorer');
    document.getElementById('view-test').classList.toggle('is-hidden', view !== 'test');

    if (view === 'test') {
        const hasResults = Boolean(AppState.latestResults);
        document.getElementById('results-container').classList.toggle('is-hidden', !hasResults);
        document.getElementById('onboarding-screen').classList.toggle('is-hidden', hasResults || AppState.userName !== "");
        document.getElementById('assessment-container').classList.toggle('is-hidden', hasResults || AppState.userName === "");
    }
}

function handleCategoryChange(value) {
    AppState.currentFilter = value;
    renderExplorer();
}

function handleSearch(value) {
    AppState.searchQuery = value.trim().toLowerCase();
    renderExplorer();
}

// --- 3. ASSESSMENT LOGIC ---
function startAssessment() {
    const nameInput = document.getElementById('user-name-input');
    if (nameInput.value.trim().length < 2) {
        UI.setNameError("Veuillez entrer un nom d'au moins 2 caracteres.");
        nameInput.focus();
        return;
    }
    
    UI.setNameError("");
    AppState.userName = nameInput.value.trim();
    AppState.latestResults = null;
    document.getElementById('onboarding-screen').classList.add('is-hidden');
    document.getElementById('assessment-container').classList.remove('is-hidden');
    document.getElementById('results-container').classList.add('is-hidden');
    renderQuestion();
}

function renderQuestion() {
    const skill = AppState.explorerData[AppState.currentStep];
    const total = AppState.explorerData.length;

    UI.updateProgress(AppState.currentStep, total);
    UI.renderQuestionCard(skill);
}

async function handleAnswer(val) {
    const skill = AppState.explorerData[AppState.currentStep];
    AppState.userRatings[skill.id] = val;
    
    if (AppState.currentStep < AppState.explorerData.length - 1) {
        AppState.currentStep++;
        renderQuestion();
    } else {
        await finishAssessment();
    }
}

function goToPreviousQuestion() {
    if (AppState.currentStep === 0) return;
    AppState.currentStep--;
    renderQuestion();
}

// --- 4. RESULTS & DATA SUBMISSION ---
async function finishAssessment() {
    document.getElementById('loading-screen').classList.remove('is-hidden');

    const finalAverages = AppState.getCalculatedResults();
    AppState.latestResults = finalAverages;

    const shareUrl = generateShareUrl();

    // Fire-and-forget: don't block the UI waiting for the Google Apps Script response
    ApiService.saveResults(AppState.userName, finalAverages, CONFIG.SCRIPT_URL, {
        shareUrl,
        detailedSkills: AppState.explorerData.map(skill => ({
            id: skill.id,
            cat: AppState.normalizeCategoryKey(skill.cat),
            sub: skill.sub.replace(/^[\d.]+\s/, ''),
            skill: skill.skill.split(' ').slice(1).join(' '),
            score: AppState.userRatings[skill.id] || 0
        }))
    }).catch(e => console.error("Save error:", e));

    showResultsPage(finalAverages);
}

function showResultsPage(averages) {
    document.getElementById('onboarding-screen').classList.add('is-hidden');
    document.getElementById('assessment-container').classList.add('is-hidden');
    document.getElementById('loading-screen').classList.add('is-hidden');
    document.getElementById('results-container').classList.remove('is-hidden');
    document.getElementById('results-container').scrollIntoView({ behavior: 'smooth' });

    const isShared = AppState.isSharedView;
    const name = AppState.userName;
    document.getElementById('results-title').textContent = isShared ? `Résultats de ${name}` : 'Vos résultats';
    document.getElementById('results-copy').textContent = isShared
        ? `Profil Product Manager de ${name} — comparaison avec le benchmark Converteo.`
        : 'Découvrez votre profil de Product Manager par rapport aux profils de Converteo. Identifiez facilement vos points fortes et vos axes d\'amélioration.';
    document.getElementById('shared-view-banner').classList.toggle('is-hidden', !isShared);
    if (isShared) document.getElementById('shared-banner-text').textContent = `Vous consultez les résultats de ${name}.`;
    document.getElementById('share-btn').classList.toggle('is-hidden', isShared);
    document.getElementById('restart-btn').classList.toggle('is-hidden', isShared);

    const labels = Object.keys(averages);
    const dataValues = Object.values(averages);
    const benchmarkData = labels.map(l => averagePMProfile[l] || 2.0);

    // Radar Chart
    AppState.myRadarChart = UI.renderChart(
        labels.map(l => l.split('. ')[1] || l),
        dataValues,
        benchmarkData,
        AppState.myRadarChart
    );

    // Profile Descriptions
    const sorted = Object.entries(averages).sort((a,b) => Number(b[1]) - Number(a[1]));
    const topProfileCard = buildProfileCard(sorted[0], 'Mon profil principal');
    const secondProfileCard = buildProfileCard(sorted[1] || sorted[0], 'Mon deuxième profil');
    const lowestProfileCard = buildProfileCard(sorted[sorted.length - 1], 'Mon axe d\'amélioration');

    const skillsByCategory = {};
    AppState.explorerData.forEach(skill => {
        const cat = AppState.normalizeCategoryKey(skill.cat);
        if (!skillsByCategory[cat]) skillsByCategory[cat] = [];
        skillsByCategory[cat].push(skill);
    });

    UI.renderScoreList(averages, skillsByCategory, AppState.userRatings, averagePMProfile);
    UI.renderProfileSummary([topProfileCard, secondProfileCard, lowestProfileCard]);
}

// --- 5. EXPLORER RENDERER ---
function renderExplorer() {
    const grid = document.getElementById('skills-grid');
    const query = AppState.searchQuery;

    let data = AppState.currentFilter === 'all'
        ? AppState.explorerData
        : AppState.explorerData.filter(item => item.cat === AppState.currentFilter);

    if (query) {
        data = data.filter(item =>
            item.skill.toLowerCase().includes(query) ||
            item.sub.toLowerCase().includes(query) ||
            item.cat.toLowerCase().includes(query) ||
            (item.description && item.description.toLowerCase().includes(query)) ||
            (item.tools && item.tools.toLowerCase().includes(query))
        );
    }

    if (data.length === 0) {
        const msg = query
            ? `Aucune compétence ne correspond à « ${AppState.searchQuery} ».`
            : 'Aucune compétence trouvée pour la catégorie sélectionnée.';
        grid.innerHTML = `<div class="empty-state">${msg}</div>`;
        return;
    }

    grid.innerHTML = data.map(item => `
        <button class="skill-card skill-card-flat" type="button" data-skill-id="${item.id}">
            <span class="skill-card-topline">
                <span class="skill-card-meta">
                    <span class="skill-card-id">${item.cat}</span>
                    <span class="skill-card-subcategory">${item.sub}</span>
                </span>
                <span class="skill-card-open-btn" data-tooltip="Fiche complète" aria-label="Fiche complète">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M1.5 11.5L11.5 1.5M11.5 1.5H6.5M11.5 1.5V6.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
            </span>
            <div class="skill-card-body">
                <h3 class="skill-card-title">${item.skill.split(' ').slice(1).join(' ')}</h3>
            </div>
        </button>
    `).join('');
}

function buildProfileCard(entry, label) {
    const [category, score] = entry;
    const normalizedCategory = AppState.normalizeCategoryKey(category);
    const profile = profileRules.find(item => normalizedCategory.includes(item.cat)) || profileRules[0];

    return {
        label,
        title: profile.title,
        desc: profile.desc,
        mission: profile.mission,
        improve: profile.improve,
        improveWhy: profile.improveWhy,
        improveMission: profile.improveMission,
        category: normalizedCategory,
        score,
        tone: label === 'Mon profil principal' ? 'top' : (label === 'Mon deuxième profil' ? 'second' : 'weak')
    };
}

// --- INITIALIZATION ---
function openModal(item) {
    document.getElementById('modal-id').textContent = item.id;
    document.getElementById('modal-title').textContent = item.skill.split(' ').slice(1).join(' ');
    document.getElementById('modal-category').textContent = item.cat.replace(/^\d+\.\s*/, '');
    document.getElementById('modal-sub').textContent = item.sub.replace(/^[\d.]+\s/, '');
    document.getElementById('modal-description').textContent = item.description || 'Cette compétence précise les attendus de maîtrise du niveau junior au niveau senior.';
    document.getElementById('modal-junior').textContent = item.junior;
    document.getElementById('modal-senior').textContent = item.senior;
    document.getElementById('modal-situation').textContent = item.situation;

    const toolsContainer = document.getElementById('modal-tools-tags');
    const tools = (item.tools || '').split(',').map(tool => tool.trim()).filter(Boolean);
    toolsContainer.innerHTML = '';
    if (tools.length === 0) {
        const emptyTag = document.createElement('span');
        emptyTag.className = 'tool-tag';
        emptyTag.textContent = 'Non renseigné';
        toolsContainer.appendChild(emptyTag);
    } else {
        tools.forEach(tool => {
            const tag = document.createElement('span');
            tag.className = 'tool-tag';
            tag.textContent = tool;
            toolsContainer.appendChild(tag);
        });
    }

    UI.setModalOpen(true);
}

function closeModal() { UI.setModalOpen(false); }

function openModalById(id) {
    const skill = AppState.explorerData.find(s => s.id === id);
    if (skill) openModal(skill);
}

function handleModalBackdrop(event) {
    if (event.target.id === 'modal') closeModal();
}

function toggleAccordion(id) {
    UI.toggleAccordionById(id);
}

function exportExcel() {
    if (typeof XLSX === 'undefined') { alert('Bibliothèque XLSX non chargée.'); return; }
    const wb = XLSX.utils.book_new();

    const catRows = Object.entries(AppState.latestResults).map(([cat, avg]) => ({
        'Catégorie': cat.replace(/^\d+\.\s*/, ''),
        'Score moyen': Number(Number(avg).toFixed(2)),
        'Score / 4': `${Number(avg).toFixed(2)} / 4`
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(catRows), 'Scores par catégorie');

    const skillRows = AppState.explorerData.map(skill => ({
        'ID': skill.id,
        'Catégorie': AppState.normalizeCategoryKey(skill.cat).replace(/^\d+\.\s*/, ''),
        'Sous-catégorie': skill.sub.replace(/^[\d.]+\s/, ''),
        'Compétence': skill.skill.replace(/^[\d.]+ /, ''),
        'Score (1-4)': AppState.userRatings[skill.id] || 0
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(skillRows), 'Scores par compétence');

    XLSX.writeFile(wb, `${AppState.userName || 'Assessment'}_PM_Profile.xlsx`);
}

async function copyRadarPng(btn) {
    const canvas = document.getElementById('radarChart');
    try {
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        const orig = btn.innerHTML;
        btn.textContent = 'Copié !';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
    } catch {
        const link = document.createElement('a');
        link.download = `${AppState.userName || 'radar'}_radar.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}

// --- SHARE LINK ---
function generateShareUrl() {
    const payload = { n: AppState.userName, r: AppState.userRatings };
    const encoded = btoa(encodeURIComponent(JSON.stringify(payload)));
    return window.location.origin + window.location.pathname + '?share=' + encoded;
}

async function copyShareUrl(btn) {
    const url = generateShareUrl();
    try {
        await navigator.clipboard.writeText(url);
        const orig = btn.innerHTML;
        btn.textContent = 'Lien copié !';
        setTimeout(() => { btn.innerHTML = orig; }, 2500);
    } catch {
        prompt('Copiez ce lien pour partager vos résultats :', url);
    }
}

async function loadSharedResults(shareParam) {
    try {
        const payload = JSON.parse(decodeURIComponent(atob(shareParam)));
        AppState.userName = payload.n || '';
        AppState.userRatings = payload.r || {};
        AppState.isSharedView = true;
        AppState.latestResults = AppState.getCalculatedResults();
        switchTab('test');
        showResultsPage(AppState.latestResults);
    } catch (e) {
        console.warn('Lien de partage invalide :', e);
    }
}

function startOwnAssessment() {
    AppState.isSharedView = false;
    restartTest();
}

function restartTest() {
    AppState.currentStep = 0;
    AppState.userRatings = {};
    AppState.userName = "";
    AppState.latestResults = null;
    AppState.isSharedView = false;
    UI.setNameError("");
    document.getElementById('user-name-input').value = "";
    history.replaceState(null, '', window.location.pathname);
    switchTab('test');
}

// Start
document.getElementById('skills-grid').addEventListener('click', e => {
    const btn = e.target.closest('[data-skill-id]');
    if (!btn) return;
    const skill = AppState.explorerData.find(s => s.id === btn.dataset.skillId);
    if (skill) openModal(skill);
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

(async () => {
    await loadSkillsFromSheet();
    const shareParam = new URLSearchParams(window.location.search).get('share');
    if (shareParam) await loadSharedResults(shareParam);
})();