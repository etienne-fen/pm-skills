// state.js
const AppState = {
    userName: "",
    currentStep: 0,
    userRatings: {}, // Stores: { "0.1.1": 3, "0.1.2": 4 }
    explorerData: [], // Will be populated by API
    myRadarChart: null,
    latestResults: null,
    currentFilter: 'all',
    searchQuery: '',

    // Canonical category keys used for scoring and export.
    categoryAliases: {
        "2. Découverte & Validation d'Opportunités (Discovery)": "2. Découverte (Discovery)",
        "4. Culture & Maîtrise de la Donnée": "4. Data Culture",
        "5. Socle Technique & Design": "5. Socle Tech & Design",
        "1. Strategie & Vision Produit": "1. Stratégie & Vision Produit",
        "1. Strategy": "1. Stratégie & Vision Produit",
        "1. Strategy & Vision Produit": "1. Stratégie & Vision Produit",
        "7. Culture et maîtrise de l'IA": "7. Culture et Maîtrise de l'IA",
        "8. AI Building": "8. AI Building",
        "8. AI building": "8. AI Building",
        "AI Builder": "8. AI Building"
    },

    normalizeCategoryKey(category) {
        return this.categoryAliases[category] || category;
    },

    // Helper to calculate final averages
    getCalculatedResults() {
        const catScores = {};
        this.explorerData.forEach(skill => {
            const normalizedCat = this.normalizeCategoryKey(skill.cat);
            if (!catScores[normalizedCat]) catScores[normalizedCat] = { sum: 0, count: 0 };
            const rawRating = this.userRatings[skill.id];
            const rating = typeof rawRating === 'object' ? (rawRating?.val || 0) : (rawRating || 0);
            catScores[normalizedCat].sum += rating;
            catScores[normalizedCat].count += 1;
        });

        const averages = {};
        for (const cat in catScores) {
            averages[cat] = (catScores[cat].sum / catScores[cat].count).toFixed(2);
        }
        return averages;
    }
};
