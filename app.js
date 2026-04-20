// app.js
// --- APP STATE ---
let currentStep = 0;
let userRatings = {};
let myRadarChart = null;
let currentFilter = 'all';

// --- PROFILE RULES ---
const profileRules = [
    {
        cat: "Leadership",
        title: "Leader Inspirant",
        desc: "Vous excellez dans le leadership et l'influence. Vous savez motiver, aligner et d?velopper votre ?quipe autour d'une vision commune.",
        mission: "Diriger une ?quipe produit de 5-10 personnes, d?finir la culture et les valeurs de l'?quipe.",
        improve: "D?velopper vos comp?tences en communication strat?gique, n?gociation et facilitation d'ateliers.",
        improveWhy: "Le leadership est le socle de toute ?quipe produit performante. Sans leadership, m?me les meilleures id?es restent lettre morte.",
        improveMission: "Animer des ateliers de vision, n?gocier avec des stakeholders difficiles, ou coacher des PM juniors."
    },
    {
        cat: "Strat?gie",
        title: "Visionnaire Strat?gique",
        desc: "Votre force est la strat?gie produit. Vous savez analyser le march?, d?finir la vision et construire des roadmaps align?es.",
        mission: "D?finir la strat?gie produit pour une entreprise de 50M? de CA.",
        improve: "Ma?triser l'analyse de march?, la construction de business model et l'alignement des parties prenantes.",
        improveWhy: "La strat?gie guide toutes les d?cisions. Une mauvaise strat?gie peut couler un produit prometteur.",
        improveMission: "Conduire une analyse de march? concurrentielle, construire un business model canvas, ou pr?senter une roadmap au comit? de direction."
    },
    {
        cat: "Discovery",
        title: "Explorateur Utilisateur",
        desc: "Vous ?tes un expert de la d?couverte. Vous savez identifier les vrais besoins utilisateurs et valider des hypoth?ses.",
        mission: "Mener la d?couverte pour un produit B2B complexe avec 1000 utilisateurs.",
        improve: "Ma?triser les m?thodes de recherche utilisateur qualitative et quantitative, et l'exp?rimentation.",
        improveWhy: "La d?couverte permet d'?viter de construire le mauvais produit. 70% des ?checs produits viennent d'une mauvaise compr?hension du besoin.",
        improveMission: "Conduire des entretiens utilisateurs, analyser des donn?es quantitatives, ou mettre en place des tests A/B."
    },
    {
        cat: "Delivery",
        title: "Ma?tre de la Livraison",
        desc: "Vous excellez dans l'ex?cution. Vous savez planifier, prioriser et livrer de la valeur de mani?re it?rative.",
        mission: "G?rer la livraison d'un produit SaaS avec 4 ?quipes de d?veloppement.",
        improve: "Ma?triser la gestion de backlog, les m?thodes agiles et les strat?gies de qualit?.",
        improveWhy: "La livraison est ce qui transforme les id?es en r?alit?. Sans livraison, les meilleures strat?gies restent th?oriques.",
        improveMission: "Prioriser un backlog complexe, animer des rituels agiles, ou mettre en place une strat?gie de lancement."
    },
    {
        cat: "Data",
        title: "Data-Driven Product Manager",
        desc: "Vous ma?trisez l'analyse de donn?es. Vous savez mesurer l'impact et prendre des d?cisions bas?es sur les faits.",
        mission: "D?finir la strat?gie de mesure pour un produit mobile avec 1M d'utilisateurs actifs.",
        improve: "Ma?triser les outils d'analyse, la d?finition de KPIs et l'interpr?tation de donn?es.",
        improveWhy: "Les donn?es permettent de valider les hypoth?ses et d'optimiser en continu. Sans donn?es, on navigue ? l'aveugle.",
        improveMission: "Construire un plan de tracking, analyser des cohortes utilisateurs, ou pr?senter des insights ? l'?quipe."
    },
    {
        cat: "Socle Tech & Design",
        title: "Architecte Technique",
        desc: "Vous comprenez les contraintes techniques et design. Vous savez collaborer efficacement avec les ?quipes tech et design.",
        mission: "Coordonner le d?veloppement d'une plateforme technique complexe avec 20 d?veloppeurs.",
        improve: "D?velopper votre compr?hension des principes d'ing?nierie et de design.",
        improveWhy: "La technique et le design sont les outils de r?alisation. Sans cette compr?hension, les PMs restent d?connect?s de la r?alit? de l'ex?cution.",
        improveMission: "Comprendre une architecture microservices, appliquer des principes de design thinking, ou collaborer sur un syst?me de design."
    },
    {
        cat: "Product Ops",
        title: "Organisateur d'?chelle",
        desc: "Votre passion est l'efficacit?. Vous construisez les outils qui permettent aux autres de briller. Vous scalez les processus.",
        mission: "Scaling d'une orga produit de 5 ? 50 PMs.",
        improve: "Ma?triser les frameworks de Product Ops et build les processus et outils qui permettent de scaler l'organisation sans perdre l'agilit?.",
        improveWhy: "Product Ops cr?e de la coh?rence, r?duit les frictions, et multiplie l'efficacit? de chaque PM. C'est critique quand l'orga grandit pour ?viter le chaos et la duplication.",
        improveMission: "Construire un framework de gestion de portefeuille produit pour une orga multi-produits, mettre en place un syst?me de priorisation, ou standardiser les processus de roadmapping."
    },
    {
        cat: "AI Product Builder",
        title: "AI Architect",
        desc: "L'IA est pour vous un levier concret. Vous savez o? elle apporte de la valeur r?elle. Vous int?grez l'IA de mani?re strat?gique.",
        mission: "Int?gration de mod?les pr?dictifs ou LLM dans un produit m?tier.",
        improve: "D?velopper votre expertise en IA/ML et savoir identifier les cas d'usage o? l'IA cr?e r?ellement de la valeur.",
        improveWhy: "L'IA est un multiplicateur de capacit?s unique. Les PMs qui savent l'exploiter de mani?re strat?gique cr?ent des avantages comp?titifs durables et proposent des exp?riences diff?renciantes.",
        improveMission: "Int?grer un LLM (ChatGPT-like) pour personnaliser l'exp?rience utilisateur, mettre en place un syst?me de recommandation ML, ou automatiser des t?ches r?p?titives via l'IA."
    }
];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;

// --- NAVIGATION ---
function switchTab(view) {
    document.getElementById('view-explorer').classList.toggle('hidden', view !== 'explorer');
    document.getElementById('view-test').classList.toggle('hidden', view !== 'test');
    document.getElementById('view-results').classList.add('hidden');
    
    // Update tab styling
    const explorerTab = document.getElementById('tab-explorer');
    const testTab = document.getElementById('tab-test');
    
    if (view === 'explorer') {
        explorerTab.classList.remove('border-transparent');
        explorerTab.classList.add('border-blue-600', 'text-blue-600');
        testTab.classList.remove('border-blue-600', 'text-blue-600');
        testTab.classList.add('border-transparent');
        filterSelection(currentFilter);
    } else if (view === 'test') {
        testTab.classList.remove('border-transparent');
        testTab.classList.add('border-blue-600', 'text-blue-600');
        explorerTab.classList.remove('border-blue-600', 'text-blue-600');
        explorerTab.classList.add('border-transparent');
        renderQuestion();
    }
}

// --- EXPLORER LOGIC ---
function renderExplorer(data) {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = '';
    
    const grouped = data.reduce((acc, item) => {
        if (!acc[item.sub]) acc[item.sub] = [];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
        acc[item.sub].push(item);
        return acc;
    }, {});

    for (const subCat in grouped) {
        const section = document.createElement('div');
        section.innerHTML = `
            <h2 class="text-2xl font-black text-slate-800 border-b-2 border-slate-300 pb-3 mb-8 flex items-center">
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-[11px] mr-4 font-black uppercase tracking-widest">Sub-pillar</span>
                ${subCat}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${grouped[subCat].map(item => `
                    <div class="group category-card bg-white p-6 rounded-2xl shadow-md border border-slate-200 cursor-pointer hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300" onclick='openModal("${item.id}")'>
                        <div class="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">${item.id}</div>
                        <h3 class="text-lg font-black text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">${item.skill.split(' ').slice(1).join(' ')}</h3>
                        <p class="text-xs text-slate-500 line-clamp-2 mb-4">${item.tools}</p>
                        <div class="inline-block text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Voir d?tails ?</div>
                    </div>
                `).join('')}
            </div>`;
        grid.appendChild(section);
    }
}

function filterSelection(cat) {
    currentFilter = cat;
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btn => {
        const match = btn.innerText === cat || (cat === 'all' && btn.innerText === 'All Categories');
        if (match) {
            btn.classList.add('filter-active');
        } else {
            btn.classList.remove('filter-active');
        }
    });

    if (cat === 'all') renderExplorer(explorerData);
    else renderExplorer(explorerData.filter(i => i.cat.toLowerCase().includes(cat.toLowerCase())));
}

// --- ASSESSMENT LOGIC ---
function renderQuestion() {
    const skill = testQuestions[currentStep];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    const progress = Math.round((currentStep / testQuestions.length) * 100);
    
    document.getElementById('progress-bar').style.width = progress + "%";
    document.getElementById('progress-text').innerText = `Comp?tence ${currentStep + 1} / ${testQuestions.length}`;
    document.getElementById('progress-percent').innerText = progress + "%";
    
    document.getElementById('q-category').innerText = skill.cat;
    document.getElementById('q-sub').innerText = skill.sub;
    document.getElementById('q-title').innerText = skill.skill.split(' ').slice(1).join(' ');
    document.getElementById('q-tools').innerText = skill.tools;
    document.getElementById('q-situation').innerText = skill.situation;

    document.querySelectorAll('.rating-option').forEach(r => r.checked = false);
}

function handleAnswer(val) {
    const skill = testQuestions[currentStep];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    console.log('Answering question', currentStep + 1, 'of', testQuestions.length, 'with value', val);
    userRatings[skill.id] = { val: val, cat: skill.cat };
    console.log('Current userRatings:', userRatings);
    
    setTimeout(() => {
        if (currentStep < testQuestions.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            console.log('All questions answered, showing results...');
            showResults();
        }
    }, 300);
}

function showResults() {
    console.log('=== SHOW RESULTS CALLED ===');
    console.log('Current step:', currentStep);
    console.log('Test questions length:', testQuestions ? testQuestions.length : 'undefined');

    if (!testQuestions || testQuestions.length === 0) {
        console.error('testQuestions is empty or undefined!');
        return;
    }

    document.getElementById('view-test').classList.add('hidden');
    document.getElementById('view-results').classList.remove('hidden');

    // Scroll to results
    document.getElementById('view-results').scrollIntoView({ behavior: 'smooth' });

    // Calculate scores by category
    const catScores = {};
    testQuestions.forEach(s => {
        if (!catScores[s.cat]) catScores[s.cat] = { sum: 0, count: 0 };
        if (userRatings[s.id]) {
            catScores[s.cat].sum += userRatings[s.id].val;
            catScores[s.cat].count += 1;
        }
    });

    console.log('Category scores:', catScores);

    const labels = Object.keys(catScores);
    const averages = labels.map(l => {
        const avg = catScores[l].count > 0 ? (catScores[l].sum / catScores[l].count).toFixed(2) : 0;
        return avg;
    });

    console.log('Final averages:', averages);

    // Check if we have data for all categories
    if (labels.length === 0) {
        console.error('No categories found!');
        alert('Erreur: Aucune cat?gorie trouv?e. Les donn?es ne sont pas charg?es correctement.');
        return;
    }

    // If no answers were given, show default data for testing
    if (Object.keys(userRatings).length === 0) {
        console.warn('No user ratings found, using test data');
        // Create some test data
        labels.forEach((label, index) => {
            const testId = testQuestions.find(q => q.cat === label)?.id;
            if (testId) {
                userRatings[testId] = { val: Math.floor(Math.random() * 4) + 1, cat: label };
            }
        });
        // Recalculate with test data
        const newCatScores = {};
        testQuestions.forEach(s => {
            if (!newCatScores[s.cat]) newCatScores[s.cat] = { sum: 0, count: 0 };
            if (userRatings[s.id]) {
                newCatScores[s.cat].sum += userRatings[s.id].val;
                newCatScores[s.cat].count += 1;
            }
        });
        Object.assign(catScores, newCatScores);
        const newAverages = labels.map(l => (catScores[l].sum / catScores[l].count).toFixed(2));
        averages.splice(0, averages.length, ...newAverages);
    }

    // Calculate top 2 categories
    const categoryScores = labels.map((l, i) => ({
        category: l,
        score: parseFloat(averages[i])
    })).sort((a, b) => b.score - a.score);

    const topTwo = categoryScores.slice(0, 2);
    const benchmarkData = labels.map(l => parseFloat(averagePMProfile[l] || 2.0));

    // Render dual radar chart (User + Benchmark)
    const ctx = document.getElementById('radarChart');
    console.log('Canvas element:', ctx);
    if (!ctx) {
        console.error('Canvas element not found!');
        return;
    }

    try {
        const ctx2d = ctx.getContext('2d');
        console.log('Chart.js available:', typeof Chart);
        
        if(myRadarChart) myRadarChart.destroy();
        myRadarChart = new Chart(ctx2d, {
        type: 'radar',
        data: {
            labels: labels.map(l => l.split(' ').slice(1).join(' ')),
            datasets: [
                {
                    label: 'Votre Score',
                    data: averages,
                    backgroundColor: 'rgba(37, 99, 235, 0.15)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 3,
                    pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 6
                },
                {
                    label: 'Profil PM Moyen',
                    data: benchmarkData,
                    backgroundColor: 'rgba(156, 163, 175, 0.1)',
                    borderColor: 'rgba(107, 114, 128, 0.8)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointBackgroundColor: 'rgba(107, 114, 128, 0.6)',
                    pointRadius: 4
                }
            ]
        },
        options: { 
            scales: { 
                r: { 
                    min: 0, 
                    max: 4, 
                    ticks: { stepSize: 1, backdropColor: 'transparent' }, 
                    grid: { color: '#e2e8f0' } 
                } 
            }, 
            plugins: { 
                legend: { 
                    display: true,
                    position: 'bottom',
                    labels: { font: { size: 12, weight: 'bold' }, padding: 20 }
                },
                tooltip: {
                    mode: 'index',
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.r;
                            if (context.datasetIndex === 0) {
                                const benchValue = context.chart.data.datasets[1].data[context.dataIndex];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
                                return `${label}: ${value}\nMoyenne PM: ${benchValue}`;
                            } else {
                                return null;
                            }
                        }
                    }
                }
            } 
        }
    });
    console.log('Chart created successfully');
    } catch (error) {
        console.error('Error creating chart:', error);
        alert('Erreur lors de la cr?ation du graphique: ' + error.message);
    }

    // Display two-category profile analysis
    const topCategory = topTwo[0];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    const secondCategory = topTwo[1];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    
    console.log('Top category:', topCategory);
    console.log('Second category:', secondCategory);
    
    const topProfile = profileRules.find(p => topCategory.category.includes(p.cat)) || profileRules[0];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    const secondProfile = profileRules.find(p => secondCategory.category.includes(p.cat)) || profileRules[0];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;

    console.log('Top profile found:', topProfile);
    console.log('Second profile found:', secondProfile);

    // Display primary profile in unified block
    const profileCardDiv = document.getElementById('profile-card');
    profileCardDiv.innerHTML = `
        <div class="mb-4">
            <h3 class="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-3">?? Profil Principal</h3>
            <h2 class="text-3xl font-black text-slate-800 mb-4 leading-tight">${topProfile.title}</h2>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">${topProfile.desc}</p>
            
            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200">
                <h4 class="text-blue-700 font-bold text-xs uppercase mb-2 tracking-widest">Type de Mission</h4>
                <p class="text-slate-700 text-xs italic">${topProfile.mission}</p>
            </div>
        </div>
    `;
    
    // Display secondary profile
    const secondaryDiv = document.getElementById('profile-secondary') || createSecondaryProfile();
    secondaryDiv.innerHTML = `
        <div class="bg-slate-700/50 text-white p-8 rounded-3xl shadow-lg border border-slate-600">
            <h3 class="text-slate-300 font-black uppercase tracking-widest text-[10px] mb-3">Profil Secondaire</h3>
            <h3 class="text-2xl font-black mb-4 leading-tight">${secondProfile.title}</h3>
            <p class="text-slate-300 leading-relaxed mb-6 text-sm">${secondProfile.desc}</p>
            <div class="bg-slate-600/40 p-4 rounded-xl border border-slate-600/60">
                <p class="text-slate-200 text-xs italic">${secondProfile.mission}</p>
            </div>
        </div>
    `;

    // Display scores comparison
    const scoresDiv = document.getElementById('profile-scores') || createScoresComparison();
    scoresDiv.innerHTML = `
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h3 class="text-slate-800 font-black uppercase tracking-widest text-[10px] mb-6">Comparaison avec la Moyenne PM</h3>
            <div class="space-y-3">
                ${labels.map((l, i) => {
                    const userScore = parseFloat(averages[i]);
                    const benchScore = benchmarkData[i];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
                    const diff = (userScore - benchScore).toFixed(2);
                    const isAbove = diff > 0;
                    return `
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-bold text-slate-700">${l.split(' ').slice(1).join(' ')}</span>
                            <div class="flex items-center gap-3">
                                <div class="text-right">
                                    <span class="text-xs font-black text-slate-800">${userScore}</span>
                                    <span class="text-[9px] text-slate-400"> / 4</span>
                                </div>
                                <span class="text-xs font-bold ${isAbove ? 'text-green-600' : 'text-red-500'}">${isAbove ? '+' : ''}${diff}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

    // Find and display lowest scoring category (area for improvement)
    const lowestCategory = categoryScores[categoryScores.length - 1];

// --- TEST QUESTIONS ---
const testQuestions = explorerData; // Already sorted descending, so last is lowest
    const improvementProfile = profileRules.find(p => lowestCategory.category.includes(p.cat)) || profileRules[0];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    
    // Get common tools for the category
    const skillsInCategory = testQuestions.filter(s => s.cat === lowestCategory.category);
    const commonTools = [...new Set(skillsInCategory.map(s => s.tools))].join(', ');
    
    const improvementDiv = document.getElementById('profile-improvement') || createImprovementArea();
    improvementDiv.innerHTML = `
        <h3 class="text-orange-700 font-black uppercase tracking-widest text-[10px] mb-4">?? Domaine ? D?velopper</h3>
        <h2 class="text-2xl font-black text-orange-800 mb-4 leading-tight">${lowestCategory.category.split(' ').slice(1).join(' ')}</h2>
        
        <div class="space-y-5">
            <div class="bg-white/70 p-5 rounded-2xl border border-orange-200">
                <h4 class="text-orange-700 font-bold text-xs uppercase mb-2 tracking-widest">Outils Communs</h4>
                <p class="text-slate-700 text-sm leading-relaxed">${commonTools}</p>
            </div>
            
            <div class="bg-white/70 p-5 rounded-2xl border border-orange-200">
                <h4 class="text-orange-700 font-bold text-xs uppercase mb-2 tracking-widest">Domaines ? Renforcer</h4>
                <p class="text-slate-700 text-sm leading-relaxed">${improvementProfile.improve}</p>
            </div>
            
            <div class="bg-white/70 p-5 rounded-2xl border border-orange-200">
                <h4 class="text-orange-700 font-bold text-xs uppercase mb-2 tracking-widest">Pourquoi c'est Important</h4>
                <p class="text-slate-700 text-sm leading-relaxed">${improvementProfile.improveWhy}</p>
            </div>
            
            <div class="bg-white/70 p-5 rounded-2xl border border-orange-200">
                <h4 class="text-orange-700 font-bold text-xs uppercase mb-2 tracking-widest">Contexts & Opportunit?s</h4>
                <p class="text-slate-700 text-sm leading-relaxed">${improvementProfile.improveMission}</p>
            </div>
        </div>
    `;

// --- MODAL & INITIALIZATION ---
function openModal(id) {
    const item = explorerData.find(i => i.id === id);
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
    const cats = ["Leadership", "Strat?gie", "Discovery", "Delivery", "Data", "Socle Tech & Design", "Product Ops", "AI Product builder"];

// --- TEST QUESTIONS ---
const testQuestions = explorerData;
    
    const allBtn = document.createElement('button');
    allBtn.className = "px-6 py-2.5 rounded-full bg-white border-2 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-600 transition duration-200 filter-btn";
    allBtn.innerText = "All Categories";
    allBtn.onclick = () => filterSelection('all');
    filterContainer.appendChild(allBtn);

    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = "px-6 py-2.5 rounded-full bg-white border-2 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-600 transition duration-200 filter-btn";
        btn.innerText = cat;
        btn.onclick = () => filterSelection(cat);
        filterContainer.appendChild(btn);
    });

    // Set initial tab state
    switchTab('explorer');
}

init();
