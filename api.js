// api.js
const ApiService = {
    // 1. Get skills from Google Sheets endpoint, fallback to local data on failure
    async fetchSkills(sourceUrl, fallbackData = []) {
        try {
            const response = await fetch(sourceUrl);
            const text = await response.text();
            const jsonData = JSON.parse(text.replace(/^[^(]+\(/, '').replace(/\);\s*$/, ''));

            return jsonData.table.rows.map(row => ({
                id: row.c[0]?.v || "",
                cat: row.c[1]?.v || "",
                sub: row.c[2]?.v || "",
                skill: row.c[3]?.v || "",
                description: row.c[4]?.v || "",
                junior: row.c[5]?.v || "",
                senior: row.c[6]?.v || "",
                situation: row.c[7]?.v || "",
                tools: row.c[8]?.v || ""
            })).filter(item => item.id !== "id" && item.id !== "");
        } catch (error) {
            console.error("Error loading sheet, using fallback data:", error);
            return fallbackData;
        }
    },

    // 2. Post results to your Google Apps Script
    async saveResults(name, scores, scriptURL) {
        const strategyValue = scores["1. Stratégie & Vision Produit"] ?? scores["1. Strategie & Vision Produit"] ?? scores["Stratégie & Vision Produit"] ?? scores["1. Strategy & Vision Produit"] ?? scores["Strategy"] ?? scores["strategy"] ?? "";
        const aiValue = scores["8. AI Building"] ?? scores["8. AI building"] ?? scores["8. AI builder"] ?? scores["AI Builder"] ?? scores["AI builder"] ?? scores["aibuilder"] ?? "";

        const compatibilityAliases = {
            ...scores,
            "1. Stratégie & Vision Produit": strategyValue,
            "Strategy": strategyValue,
            "8. AI Building": aiValue,
            "AI Builder": aiValue,
            "2. Découverte & Validation d'Opportunités (Discovery)": scores["2. Découverte (Discovery)"] ?? "",
            "4. Culture & Maîtrise de la Donnée": scores["4. Data Culture"] ?? "",
            "5. Socle Technique & Design": scores["5. Socle Tech & Design"] ?? ""
        };

        const compactScores = {
            strategy: strategyValue,
            Strategy: strategyValue,
            discovery: scores["2. Découverte (Discovery)"] ?? scores["2. Découverte & Validation d'Opportunités (Discovery)"] ?? "",
            delivery: scores["3. Conception & Livraison (Delivery)"] ?? "",
            data: scores["4. Data Culture"] ?? "",
            techDesign: scores["5. Socle Tech & Design"] ?? "",
            productOps: scores["6. Product Ops"] ?? "",
            aimaster: scores["7. Culture et maîtrise de l'IA"] ?? scores["7. Maîtrise IA"] ?? scores["7. Culture et Maîtrise de l'IA"] ?? "",
            aibuilder: aiValue,
            "AI Builder": aiValue
        };

        const payload = {
            name,
            // Keep backward compatibility inside the main object used by most scripts.
            scores: compatibilityAliases,
            rawScores: scores,
            compactScores
        };

        return fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    }
};