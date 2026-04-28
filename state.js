// state.js
const AppState = {
    userName: "",
    currentStep: 0,
    userRatings: {}, // Stores: { "0.1.1": 3, "0.1.2": 4 }
    explorerData: [], // Will be populated by API
    myRadarChart: null,
    latestResults: null,
    currentFilter: 'all',

    // Helper to calculate final averages
    getCalculatedResults() {
        const catScores = {};
        this.explorerData.forEach(skill => {
            if (!catScores[skill.cat]) catScores[skill.cat] = { sum: 0, count: 0 };
            const rawRating = this.userRatings[skill.id];
            const rating = typeof rawRating === 'object' ? (rawRating?.val || 0) : (rawRating || 0);
            catScores[skill.cat].sum += rating;
            catScores[skill.cat].count += 1;
        });

        const averages = {};
        for (const cat in catScores) {
            averages[cat] = (catScores[cat].sum / catScores[cat].count).toFixed(2);
        }
        return averages;
    }
};
