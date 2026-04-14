// app.js
// --- APP STATE ---
let currentStep = 0;
let userRatings = {};
let myRadarChart = null;

// --- NAVIGATION ---
function switchTab(view) {
    document.getElementById('view-explorer').classList.toggle('hidden', view !== 'explorer');
    document.getElementById('view-test').classList.toggle('hidden', view !== 'test');
    document.getElementById('view-results').classList.add('hidden');
    document.getElementById('tab-explorer').classList.toggle('active-tab', view === 'explorer');
    document.getElementById('tab-test').classList.toggle('active-tab', view === 'test');
    
    if (view === 'explorer') renderExplorer(skillsData);
    if (view === 'test') renderQuestion();
}

// --- EXPLORER LOGIC ---
function renderExplorer(data) {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = '';
    
    const grouped = data.reduce((acc, item) => {
        if (!acc[item.sub]) acc[item.sub] = [];
        acc[item.sub].push(item);
        return acc;
    }, {});

    for (const subCat in grouped) {
        const section = document.createElement('div');
        section.innerHTML = `
            <h2 class="text-xl font-black text-slate-700 border-b-2 border-slate-200 pb-2 mb-6 flex items-center">
                <span class="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] mr-3 uppercase">Sub</span>
                ${subCat}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${grouped[subCat].map(item => `
                    <div class="category-card bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-blue-300 transition-all" onclick='openModal(${JSON.stringify(item).replace(/'/g, "&apos;")})'>
                        <div class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">${item.id}</div>
                        <h3 class="text-lg font-black text-slate-800 mb-3 leading-tight">${item.skill.split(' ').slice(1).join(' ')}</h3>
                        <p class="text-xs text-slate-400 line-clamp-2">${item.tools}</p>
                    </div>
                `).join('')}
            </div>`;
        grid.appendChild(section);
    }
}

function filterSelection(cat) {
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btn => {
        const match = btn.innerText === cat || (cat === 'all' && btn.innerText === 'All Categories');
        btn.classList.toggle('bg-slate-800', match);
        btn.classList.toggle('text-white', match);
    });

    if (cat === 'all') renderExplorer(skillsData);
    else renderExplorer(skillsData.filter(i => i.cat.toLowerCase().includes(cat.toLowerCase())));
}

// --- ASSESSMENT LOGIC ---
function renderQuestion() {
    const skill = skillsData[currentStep];
    const progress = Math.round((currentStep / skillsData.length) * 100);
    
    document.getElementById('progress-bar').style.width = progress + "%";
    document.getElementById('progress-text').innerText = `Compétence ${currentStep + 1} / ${skillsData.length}`;
    document.getElementById('progress-percent').innerText = progress + "%";
    
    document.getElementById('q-category').innerText = skill.cat;
    document.getElementById('q-sub').innerText = skill.sub;
    document.getElementById('q-title').innerText = skill.skill.split(' ').slice(1).join(' ');
    document.getElementById('q-tools').innerText = skill.tools;
    document.getElementById('q-situation').innerText = skill.situation;

    document.querySelectorAll('.rating-option').forEach(r => r.checked = false);
}

function handleAnswer(val) {
    const skill = skillsData[currentStep];
    userRatings[skill.id] = { val: val, cat: skill.cat };
    
    setTimeout(() => {
        if (currentStep < skillsData.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            showResults();
        }
    }, 300);
}

function showResults() {
    document.getElementById('view-test').classList.add('hidden');
    document.getElementById('view-results').classList.remove('hidden');

    const catScores = {};
    skillsData.forEach(s => {
        if (!catScores[s.cat]) catScores[s.cat] = { sum: 0, count: 0 };
        catScores[s.cat].sum += userRatings[s.id].val;
        catScores[s.cat].count += 1;
    });

    const labels = Object.keys(catScores);
    const averages = labels.map(l => (catScores[l].sum / catScores[l].count).toFixed(2));

    const ctx = document.getElementById('radarChart').getContext('2d');
    if(myRadarChart) myRadarChart.destroy();
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels.map(l => l.split(' ').slice(1).join(' ')),
            datasets: [{
                label: 'Moyenne par pilier',
                data: averages,
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 4,
                pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                pointRadius: 4
            }]
        },
        options: { scales: { r: { min: 0, max: 4, ticks: { stepSize: 1, backdropColor: 'transparent' }, grid: { color: '#e2e8f0' } } }, plugins: { legend: { display: false } } }
    });

    let maxAvg = -1;
    let dominantCat = "";
    labels.forEach((l, i) => {
        if(parseFloat(averages[i]) > maxAvg) {
            maxAvg = parseFloat(averages[i]);
            dominantCat = l;
        }
    });

    const profile = profileRules.find(p => dominantCat.includes(p.cat)) || profileRules[0];
    document.getElementById('profile-title').innerText = profile.title;
    document.getElementById('profile-desc').innerText = profile.desc;
    document.getElementById('profile-mission').innerText = profile.mission;
}

function restartTest() {
    currentStep = 0;
    userRatings = {};
    switchTab('test');
}

// --- MODAL & INITIALIZATION ---
function openModal(item) {
    document.getElementById('modal-id').innerText = item.id;
    document.getElementById('modal-title').innerText = item.skill.split(' ').slice(1).join(' ');
    document.getElementById('modal-frameworks').innerText = item.tools;
    document.getElementById('modal-junior').innerText = item.junior;
    document.getElementById('modal-senior').innerText = item.senior;
    document.getElementById('modal-situation').innerText = item.situation;
    document.getElementById('modal').classList.remove('opacity-0', 'pointer-events-none');
}

function closeModal() {
    document.getElementById('modal').classList.add('opacity-0', 'pointer-events-none');
}

function init() {
    const filterContainer = document.getElementById('filters');
    const cats = ["Leadership", "Stratégie", "Discovery", "Delivery", "Data", "Socle Tech & Design", "Product Ops", "AI Product builder"];
    
    const allBtn = document.createElement('button');
    allBtn.className = "px-6 py-2 rounded-full bg-slate-800 text-white text-xs font-black uppercase tracking-widest transition";
    allBtn.innerText = "All Categories";
    allBtn.onclick = () => filterSelection('all');
    filterContainer.appendChild(allBtn);

    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = "px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition";
        btn.innerText = cat;
        btn.onclick = () => filterSelection(cat);
        filterContainer.appendChild(btn);
    });

    renderExplorer(skillsData);
}

init();
