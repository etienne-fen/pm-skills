// --- CONFIGURATION ---
const CONFIG = {
    // URL to fetch skill data (Google Sheet JSON endpoint)
    DATA_SOURCE_URL: "https://docs.google.com/spreadsheets/d/1ecR3OfBTqYhc5ljzrA2geTUSiywagxwMyS3UCBulGUk/gviz/tq?tqx=out:json",
    // Your Google Apps Script URL for saving results
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyIEkYOOkI1Ib4w4V1gHCREzhOOQ71IgewiBnQt0ZxU7Wh8WXvlIJEpENKE6rHqlKU/exec"
};

// --- 1. DATA LOADING (API) ---
async function loadSkillsFromSheet() {
    AppState.explorerData = await ApiService.fetchSkills(CONFIG.DATA_SOURCE_URL, explorerData);
    console.log("Data loaded:", AppState.explorerData);
    UI.updateExplorerMetrics(AppState.explorerData);
    UI.renderCategoryFilter(AppState.explorerData, AppState.currentFilter);
    renderExplorer();
}

// --- 2. NAVIGATION & UI ---
function switchTab(view) {
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
    // Show loading screen
    document.getElementById('loading-screen').classList.remove('is-hidden');
    
    const finalAverages = AppState.getCalculatedResults();
    AppState.latestResults = finalAverages;
    console.log('Final category keys sent:', Object.keys(finalAverages));

    // 2. Send to Google Sheets (POST)
    try {
        await ApiService.saveResults(AppState.userName, finalAverages, CONFIG.SCRIPT_URL);
    } catch (e) { console.error("Save error:", e); }

    // 3. Show Results UI
    showResultsPage(finalAverages);
}

function showResultsPage(averages) {
    document.getElementById('onboarding-screen').classList.add('is-hidden');
    document.getElementById('assessment-container').classList.add('is-hidden');
    document.getElementById('loading-screen').classList.add('is-hidden');
    document.getElementById('results-container').classList.remove('is-hidden');
    document.getElementById('results-container').scrollIntoView({ behavior: 'smooth' });

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

    UI.renderScoreList(averages);
    UI.renderProfileSummary([topProfileCard, secondProfileCard, lowestProfileCard]);
}

// --- 5. EXPLORER RENDERER ---
function renderExplorer() {
    const grid = document.getElementById('skills-grid');
    const data = AppState.currentFilter === 'all'
        ? AppState.explorerData
        : AppState.explorerData.filter(item => item.cat === AppState.currentFilter);

    if (data.length === 0) {
        grid.innerHTML = '<div class="empty-state">Aucune compétence trouvée pour la catégorie sélectionnée.</div>';
        return;
    }

    grid.innerHTML = data.map(item => `
        <button class="skill-card skill-card-flat" type="button" onclick='openModal(${JSON.stringify(item).replace(/'/g, "&apos;")})'>
            <span class="skill-card-topline">
                <span class="skill-card-id">${item.cat}</span>
            </span>
            <div class="skill-card-body">
                <h3 class="skill-card-title">${item.skill.split(' ').slice(1).join(' ')}</h3>
                <p class="skill-card-subcategory">${item.sub}</p>
            </div>
            <span class="skill-card-footer">Ouvrir la fiche complète</span>
        </button>
    `).join('');
}

function buildProfileCard(entry, label) {
    const [category, score] = entry;
    const profile = profileRules.find(item => category.includes(item.cat)) || profileRules[0];

    return {
        label,
        title: profile.title,
        desc: profile.desc,
        mission: profile.mission,
        improve: profile.improve,
        improveWhy: profile.improveWhy,
        improveMission: profile.improveMission,
        category,
        score,
        tone: label === 'Mon profil principal' ? 'top' : (label === 'Mon deuxième profil' ? 'second' : 'weak')
    };
}

// --- INITIALIZATION ---
function openModal(item) {
    document.getElementById('modal-id').innerText = item.id;
    document.getElementById('modal-title').innerText = item.skill.split(' ').slice(1).join(' ');
    document.getElementById('modal-category').innerText = item.cat;
    document.getElementById('modal-sub').innerText = item.sub;
    document.getElementById('modal-description').innerText = item.description || 'Cette compétence précise les attendus de maîtrise du niveau junior au niveau senior.';
    document.getElementById('modal-junior').innerText = item.junior;
    document.getElementById('modal-senior').innerText = item.senior;
    document.getElementById('modal-situation').innerText = item.situation;

    const toolsContainer = document.getElementById('modal-tools-tags');
    const tools = (item.tools || '').split(',').map(tool => tool.trim()).filter(Boolean);
    toolsContainer.innerHTML = '';
    if (tools.length === 0) {
        const emptyTag = document.createElement('span');
        emptyTag.className = 'tool-tag';
        emptyTag.innerText = 'Non renseigné';
        toolsContainer.appendChild(emptyTag);
    } else {
        tools.forEach(tool => {
            const tag = document.createElement('span');
            tag.className = 'tool-tag';
            tag.innerText = tool;
            toolsContainer.appendChild(tag);
        });
    }

    UI.setModalOpen(true);
}

function closeModal() { UI.setModalOpen(false); }

function handleModalBackdrop(event) {
    if (event.target.id === 'modal') closeModal();
}

function toggleAccordion(id) {
    UI.toggleAccordionById(id);
}

function restartTest() {
    AppState.currentStep = 0;
    AppState.userRatings = {};
    AppState.userName = "";
    AppState.latestResults = null;
    UI.setNameError("");
    document.getElementById('user-name-input').value = "";
    switchTab('test');
}

// Start
loadSkillsFromSheet();