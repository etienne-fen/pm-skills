// data.js

// ===== SKILL EXPLORER DATA =====
// All available skills for the explorer view
const explorerData = [
    {
        "id":  "1.1.1",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Elaboration de la Stratégie",
        "skill":  "1.1.1 Analyse du Marché & Concurrence",
        "description":  "Veille active et analyse critique des tendances sectorielles et des mouvements des concurrents pour identifier des opportunités de différenciation.",
        "junior":  "Effectue une veille sur des concurrents directs et des fonctionnalités spécifiques à la demande de son manager.",
        "senior":  "Mène une analyse continue et pro-active du marché (tendances macro, technologies émergentes, mouvements concurrentiels) pour identifier des opportunités de rupture et des menaces stratégiques.",
        "situation":  "Le senior identifie une nouvelle technologie (ex: LLM open-source performant) comme une menace potentielle pour la position de leader, poussant à la création d'une nouvelle initiative R&D.",
        "tools":  "SWOT, PESTEL, Forces de Porter, Wardley Maps"
    },
    {
        "id":  "1.1.2",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Elaboration de la Stratégie",
        "skill":  "1.1.2 Vision Produit",
        "description":  "Définition d'un état futur ambitieux et inspirant pour le produit, servant de boussole à long terme pour toutes les décisions tactiques.",
        "junior":  "Comprend, articule et peut expliquer la vision du produit à son équipe. S'assure que son backlog est aligné avec la vision",
        "senior":  "Définit, possède et évangélise une vision produit inspirante sur 3-5 ans. Il s'assure qu'elle est comprise, partagée et qu'elle guide les décisions à tous les niveaux de l'entreprise.",
        "situation":  "Lors d'une réunion \"all-hands\", le senior présente la vision avec un storytelling impactant, donnant un sens et une direction clairs à tous les employés.",
        "tools":  "V2MOM (Vision, Values, Methods, Obstacles, Measures), Golden Circle, Product Vision Board."
    },
    {
        "id":  "1.1.3",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Elaboration de la Stratégie",
        "skill":  "1.1.3 Business & Modèle Éco.",
        "description":  "Compréhension des mécanismes de création de valeur financière et de rentabilité du produit au sein de l'entreprise.",
        "junior":  "Comprend le modèle économique du produit et l'impact de son périmètre sur les KPIs principaux (ex: revenus, acquisition). Calcule le ROI de ses fonctionnalités",
        "senior":  "Construit, modélise et optimise le modèle économique. Prend des décisions stratégiques (pricing, nouveaux marchés) en se basant sur une analyse financière approfondie (P&L, CAC, LTV).",
        "situation":  "Le senior décide de pivoter d'un modèle de licence unique vers un abonnement (SaaS) en modélisant l'impact sur les revenus récurrents (MRR) et la valorisation de l'entreprise.",
        "tools":  "Business Model Canvas, Lean Canvas, Analyse de la chaîne de valeur."
    },
    {
        "id":  "1.2.1",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.2 Communication & Alignement de la Stratégie",
        "skill":  "1.2.1 Construction & Gestion de Roadmap",
        "description":  "Planification stratégique des étapes de développement du produit visant à maximiser l'impact business et la valeur utilisateur dans le temps.",
        "junior":  "Contribue à la roadmap de son équipe en fournissant des estimations pour son périmètre.",
        "senior":  "Construit et maintient une roadmap stratégique basée sur les \"outcomes\" (résultats) et non les \"outputs\" (fonctionnalités). La présente et la défend au niveau exécutif.",
        "situation":  "Le senior présente au comité de direction une roadmap axée sur des objectifs comme \"Augmenter la rétention de 15%\" plutôt qu'une liste de fonctionnalités, justifiant chaque initiative par son impact attendu.",
        "tools":  "Now-Next-Later Roadmap, Roadmap Thématique, OKRs (pour lier stratégie et exécution)."
    },
    {
        "id":  "1.2.2",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.2 Communication & Alignement de la Stratégie",
        "skill":  "1.2.2 Influence & Négociation",
        "description":  "Aptitude à convaincre et à obtenir un consensus sans lien hiérarchique, tout en gérant les conflits d'intérêts entre les différentes parties prenantes.",
        "junior":  "Sait argumenter pour défendre une priorité au sein de son équipe ou obtenir de l'aide d'une équipe adjacente.",
        "senior":  "Cartographie l'ensemble des parties prenantes, négocie et obtient leur adhésion, même sans autorité hiérarchique. Sait dire \"non\" de manière constructive en expliquant les arbitrages et en préservant la relation.",
        "situation":  "Un directeur commercial demande une fonctionnalité spécifique pour un client clé. Le senior, au lieu d'accepter ou de refuser, organise un atelier avec lui, lui présente les coûts d'opportunité et négocie une solution alternative qui répond à 80% du besoin sans dévier de la stratégie.",
        "tools":  "Matrice Pouvoir/Intérêt, Négociation Raisonnée (Getting to Yes), Matrice RACI"
    },
    {
        "id":  "1.2.3",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.2 Communication & Alignement de la Stratégie",
        "skill":  "1.2.3 Communication Stratégique & Storytelling",
        "description":  "Capacité à structurer et transmettre des messages complexes de manière persuasive et mémorable pour aligner les parties prenantes sur une vision commune.",
        "junior":  "Présente les features et l'avancement de son périmètre. Communique de manière claire et concise au sein de son équipe et avec ses interlocuteurs directs.",
        "senior":  "Maîtrise l'art du storytelling pour créer créant une adhésion émotionnelle et rationnelle. Adapte son discours à son audience pour inspirer, persuader et créer un alignement autour de la vision et de la stratégie.",
        "situation":  "Face au comité de direction, le senior ne liste pas les fonctionnalités à venir. Il raconte l'histoire de l'utilisateur, explique son problème, et positionne la roadmap comme la solution narrative à ce problème.",
        "tools":  "Golden Circle (Why, How, What), Méthode STAR"
    },
    {
        "id":  "1.3.1",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.3 Viabilité & Conformité réglementaire",
        "skill":  "1.3.1 Culture légale & Conformité",
        "description":  "Intégration systématique des contraintes juridiques et réglementaires (RGPD, accessibilité) comme levier de confiance et d'éthique produit.",
        "junior":  "Connaît les principes de base du RGPD et autres régulations clés. Collabore avec le DPO/Juriste pour assurer la conformité de ses features.",
        "senior":  "Anticipe l'impact des futures régulations sur la roadmap.Transforme la conformité (ex: la confidentialité) en un avantage concurrentiel et un argument produit (\"Privacy by Design\")",
        "situation":  "Une nouvelle fonctionnalité nécessite de suivre l'activité utilisateur. Le junior applique la conformité RGPD à la fin en ajoutant une case à cocher qui dégrade l'expérience. Le senior intègre la contrainte légale comme un principe de design dès le début (\"Privacy by Design\") pour créer une solution qui est à la fois conforme et meilleure pour l'utilisateur.",
        "tools":  "Privacy by Design, Analyse d'Impact relative à la Protection des Données (AIPD)"
    },
    {
        "id":  "2.1.1",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.1 Recherche & Génération d'Insights",
        "skill":  "2.1.1 Recherche Utilisateur Qualitative",
        "description":  "Utilisation de méthodes d'observation et d'interaction directe pour comprendre en profondeur les motivations, les besoins et les frustrations des utilisateurs.",
        "junior":  "Mène des entretiens utilisateurs et des tests d'utilisabilité en utilisant des scripts préparés. Sait synthétiser les retours bruts.",
        "senior":  "Définit la stratégie de recherche (quelles méthodes, quels segments). Mène des entretiens complexes (ex: ethnographiques) pour découvrir des besoins latents et non exprimés.",
        "situation":  "Le senior, en observant un utilisateur sur son lieu de travail (recherche ethnographique), découvre un \"hack\" que celui-ci a mis en place, révélant un besoin profond que des entretiens classiques n'avaient pas fait émerger.",
        "tools":  "Personas, Jobs-to-be-Done (JTBD), User Story Mapping, Customer Journey, Interviews."
    },
    {
        "id":  "2.1.2",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.1 Recherche & Génération d'Insights",
        "skill":  "2.1.2 Analyse de Données Quantitatives",
        "description":  "Exploitation statistique des données d'usage pour identifier des tendances de comportement à grande échelle et valider des hypothèses.",
        "junior":  "Sait utiliser les outils d'analyse pour créer des dashboards et suivre l'adoption de ses fonctionnalités.",
        "senior":  "Définit le plan de tracking du produit. Maîtrise l'analyse de cohortes, les funnels de conversion et sait croiser données quanti/quali pour formuler des hypothèses stratégiques.",
        "situation":  "Le senior remarque une chute dans le funnel de conversion à une étape précise. Il demande au junior de mener des entretiens ciblés sur les utilisateurs qui abandonnent à cette étape pour comprendre le \"pourquoi\" derrière les chiffres",
        "tools":  "Métriques Pirate (AARRR), HEART Framework, Analyse de cohortes, Data comportemantales "
    },
    {
        "id":  "2.2.1",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.2 Synthèse & Expérimentation",
        "skill":  "2.2.1 Définition du Problème & Idéation",
        "description":  "Capacité à isoler la cause racine d'un problème utilisateur et à générer un large éventail de solutions potentielles avant de converger.",
        "junior":  "Participe à des ateliers de brainstorming. Sait formuler un problème utilisateur clairement à partir de retours directs. ",
        "senior":  "Facilite des ateliers de créativité. Maîtrise l'art de reformuler un problème pour ouvrir le champ des possibles et agrège des insights de sources multiples pour définir le \"vrai\" problème à résoudre.",
        "situation":  "Face à une demande client pour \"un bouton d'export Excel\", le senior utilise les \"5 Pourquoi\" pour comprendre le besoin réel derrière la demande, qui est de \"partager la performance de l'équipe avec mon manager\", ouvrant la voie à des solutions bien plus pertinentes.",
        "tools":  "Opportunity Solution Tree, \"How Might We\", 5 Pourquoi, Design Thinking"
    },
    {
        "id":  "2.2.2",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.2 Synthèse & Expérimentation",
        "skill":  "2.2.2 Conception & Exploration ",
        "description":  "Traduction des idées en concepts tangibles (parcours, wireframes) pour explorer visuellement la solution et préparer les tests.",
        "junior":  "Conçoit les supports de test sur la base d'un brief fourni à partir de wireframes simples et de scénarios prédéfinis.",
        "senior":  "Définit la stratégie d'exploration en travaillants ur la conception de supports interactifs permettant une simulation haute fidélité des parcours.",
        "situation":  "Le senior est en capacité d'appréhender les ressources design (outils et équipe) à sa disposition pour obtenir des supports d'exploration à la hauteur de l'hypothèse explorée.",
        "tools":  "Wireframing, Prototyping, Test Utilisateurs (guerilla ou non)"
    },
    {
        "id":  "2.2.3",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.2 Synthèse & Expérimentation",
        "skill":  "2.2.3 Expérimentation & Validation",
        "description":  "Mise en Å“uvre de tests rapides et peu coûteux (MVP, tests A/B) pour valider la valeur et la désirabilité avant le développement complet.",
        "junior":  "Met en place et mesure des A/B tests simples pour optimiser un élément (ex: un bouton, un titre).",
        "senior":  "Conçoit une stratégie d'expérimentation pour dé-risquer les 4 grands risques (valeur, utilisabilité, faisabilité, viabilité). Sait quand utiliser un prototype, un MVP \"Concierge\" ou un test de \"fausse porte\".",
        "situation":  "Pour valider l'appétence pour une fonctionnalité complexe d'IA, le senior met en place une \"fausse porte\" : un bouton dans l'interface. Si les utilisateurs cliquent, un message indique que la fonctionnalité arrive bientôt, validant l'intérêt avant d'écrire une seule ligne de code.",
        "tools":  " Lean Startup (Build-Measure-Learn), A/B Testing, Test de Fausse Porte (Fake Door)"
    },
    {
        "id":  "3.1.1",
        "cat":  "3. Conception & Livraison (Delivery)",
        "sub":  "3.1 Planification & Priorisation",
        "skill":  "3.1.1 Gestion de Backlog & Spécifications",
        "description":  "Organisation et documentation détaillée des besoins (User Stories) pour assurer une compréhension parfaite par l'équipe (dev + design).",
        "junior":  "Rédige des User Stories claires, concises et avec des critères d'acceptation précis. Maintient le backlog de son équipe propre et ordonné.",
        "senior":  "Gère un backlog comme un outil de communication stratégique. Excelle dans l'art de découper des épopées complexes en tranches de valeur livrables et indépendantes.",
        "situation":  "Le senior découpe un projet de 3 mois en étapes hebdomadaires permettant de livrer de la valeur et de collecter du feedback utilisateur dès la deuxième semaine.",
        "tools":  "User Story, INVEST, Gherkin (pour les critères d'acceptation)."
    },
    {
        "id":  "3.1.2",
        "cat":  "3. Conception & Livraison (Delivery)",
        "sub":  "3.1 Planification & Priorisation",
        "skill":  "3.1.2 Priorisation ",
        "description":  "Arbitrage rationnel entre les différentes opportunités pour maximiser la valeur délivrée en tenant compte des contraintes de ressources et de temps.",
        "junior":  "Priorise le travail de son équipe au niveau du sprint, souvent en collaboration avec un PM plus senior.",
        "senior":  "Maîtrise plusieurs frameworks de priorisation et sait choisir le bon en fonction du contexte (maturité du produit, objectifs business). Communique et défend ses choix de manière transparente et rationnelle. Focus impact et valeur.",
        "situation":  "Le senior, préparant le trimestre, utilise le framework RICE pour comparer une initiative \"stratégique\" (gros Reach, gros Impact) mais complexe (gros Effort) à une série de petites améliorations rapides mais très demandées, et arbitre en connaissance de cause.",
        "tools":  "RICE, ICE, MoSCoW, Modèle de Kano"
    },
    {
        "id":  "3.2.1",
        "cat":  "3. Conception & Livraison (Delivery)",
        "sub":  "3.2 Exécution & Lancement",
        "skill":  "3.2.1 Animation d'équipe & Rituels Agiles",
        "description":  "Facilitation de la collaboration quotidienne avec l'équipe de développement en s'appuyant sur les méthodes agiles pour maintenir la vélocité.",
        "junior":  "Participe activement et efficacement aux rituels de son équipe (daily, planning, retro). Fait le lien quotidien entre les besoins business et l'équipe de développement.",
        "senior":  "Facilite les rituels et les rend plus efficaces. Agit comme un \"bouclier\" pour l'équipe en la protégeant des interruptions, et comme un \"moteur\" en maintenant la motivation et la concentration sur l'objectif.",
        "situation":  "Le senior, voyant que les \"dailies\" s'éternisent, recadre l'exercice pour qu'il soit focalisé sur les blocages et la synchronisation, et non un rapport d'activité. Il crée des instances dédiées pour les discussions plus longues.",
        "tools":  "Scrum, Kanban, SAFE"
    },
    {
        "id":  "3.2.2",
        "cat":  "3. Conception & Livraison (Delivery)",
        "sub":  "3.2 Exécution & Lancement",
        "skill":  "3.2.2 Stratégie de Qualité & Tests (QA)",
        "description":  "Garantie de la fiabilité du produit via des protocoles de tests rigoureux et une définition claire des standards de qualité avant mise en production.",
        "junior":  "Participe activement aux phases de test. Effectue les tests d'acceptation utilisateur (UAT) sur ses fonctionnalités. Valide que ce qui a été développé correspond aux critères d'acceptation et signale les bugs de manière claire et reproductible.",
        "senior":  "Définit la stratégie de qualité globale en collaboration avec les équipes QA et de développement. Va au-delà de la simple validation fonctionnelle en se concentrant sur la qualité perçue par l'utilisateur (performance, robustesse, cohérence). Arbitre sur la criticité des bugs.",
        "situation":  "Un bug est découvert juste avant une mise en production. Le junior le documente. Le senior analyse son impact réel sur l'expérience utilisateur, sa fréquence d'apparition et la complexité du correctif pour prendre la décision : \"On retarde le lancement\" ou \"On lance et on corrigera dans un hotfix\".",
        "tools":  "Pyramide des Tests, Tests d'Acceptation Utilisateur (UAT), Tests Exploratoires, Bug Triage"
    },
    {
        "id":  "3.2.3",
        "cat":  "3. Conception & Livraison (Delivery)",
        "sub":  "3.2 Exécution & Lancement",
        "skill":  "3.2.3 Stratégie de Lancement (Go-to-Market)",
        "description":  "Orchestration de la mise sur le marché d'une fonctionnalité pour assurer une adoption maximale et une communication fluide vers les clients.",
        "junior":  "Coordonne les lancements de fonctionnalités avec les équipes marketing et support (rédaction de notes de version, formation du support).",
        "senior":  "Définit la stratégie de lancement complète : segmentation de l'audience, communication, plan de déploiement progressif (feature flagging), définition des métriques de succès et mesure de l'impact post-lancement.",
        "situation":  "Pour un changement d'interface majeur, le senior met en place un plan de déploiement sur 1 mois : 1% des utilisateurs la première semaine, puis 10%, puis 50%, etc., tout en monitorant de près les KPIs d'engagement et les retours support pour pouvoir réagir rapidement en cas de problème.",
        "tools":  "Feature Flags, Beta Programs, A/B Test de déploiement."
    },
    {
        "id":  "4.1.1",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.1 Définition de la Stratégie de Mesure",
        "skill":  "4.1.1 Définition des KPIs & North Star Metric",
        "description":  "Sélection et hiérarchisation des indicateurs clés de performance permettant de piloter la santé et la croissance du produit.",
        "junior":  "Comprend et suit les KPIs définis pour son produit. Sait expliquer comment ses fonctionnalités impactent ces indicateurs.",
        "senior":  "Définit la \"North Star Metric\" (NSM) du produit, qui encapsule la valeur apportée à l'utilisateur. Décline cette NSM en un arbre de métriques actionnables (inputs) pour guider les efforts des équipes.",
        "situation":  "L'entreprise veut \"augmenter les revenus\". Le senior définit la NSM comme \"le nombre d'équipes collaborant chaque semaine\". Il démontre que l'amélioration de cette métrique est le principal levier de rétention, et donc de revenus à long terme.",
        "tools":  "North Star Metric Framework, Opportunity Tree, OKRs"
    },
    {
        "id":  "4.1.2",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.1 Définition de la Stratégie de Mesure",
        "skill":  "4.1.2 Conception du Plan de Tracking",
        "description":  "Définition technique des événements et des propriétés à collecter pour assurer une mesure précise et exploitable des comportements utilisateurs.",
        "junior":  "Rédige des spécifications de tracking pour les nouvelles fonctionnalités en se basant sur les templates et les conventions existantes.",
        "senior":  "Conçoit le plan de tracking complet du produit. Définit une taxonomie d'événements claire et pérenne. S'assure que les données nécessaires pour répondre aux futures questions stratégiques seront bien collectées.",
        "situation":  "Avant une refonte majeure, le senior ne se contente pas de tracker les clics. Il conçoit un plan de tracking qui permettra de mesurer l'adoption par segment d'utilisateurs, l'impact sur la rétention à 30 jours, et la corrélation avec l'upsell.",
        "tools":  "Taxonomie d'événements, Data Dictionary"
    },
    {
        "id":  "4.2.1",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.2 Analyse & Interprétation",
        "skill":  "4.2.1 Maîtrise des Outils d'Analyse",
        "description":  "Utilisation experte des plateformes de data et des langages de requête (SQL) pour extraire l'information brute nécessaire à l'analyse.",
        "junior":  "Maîtrise les outils d'analyse produit (ex: Mixpanel, Amplitude) pour construire des dashboards, créer des funnels de conversion et analyser des cohortes simples.",
        "senior":  "Va au-delà des outils standards. Sait écrire des requêtes SQL de base pour explorer la donnée brute, et collabore avec les Data Analysts pour mener des analyses statistiques complexes (ex: tests de significativité).",
        "situation":  "Le junior constate une baisse de 5% dans un funnel. Le senior écrit une requête SQL pour isoler les utilisateurs concernés, se rend compte qu'ils sont tous sur une ancienne version de l'app et un type d'appareil spécifique, identifiant ainsi la cause racine.",
        "tools":  "SQL, Plateformes d'analyse Produit, Outils de BI"
    },
    {
        "id":  "4.2.2",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.2 Analyse & Interprétation",
        "skill":  "4.2.2 Transformation de la Donnée en Insight",
        "description":  "Capacité à interpréter les données pour en extraire des recommandations concrètes et orienter les décisions produit.",
        "junior":  "Est capable de répondre à des questions factuelles avec la donnée (ex: \"Quel est le taux de conversion de cette page ?\").",
        "senior":  "Ne se contente pas de présenter des chiffres. Il raconte une histoire avec la donnée, identifie des tendances de fond, et transforme une analyse en une recommandation stratégique actionnable.",
        "situation":  "Le junior présente un slide montrant que \"70% des utilisateurs n'utilisent pas la fonctionnalité X\". Le senior, en analysant les cohortes, montre que \"les utilisateurs qui utilisent la fonctionnalité X ont une rétention 3x supérieure, ce qui représente une opportunité majeure si nous améliorons son adoption\". ",
        "tools":  "Storytelling par la donnée, Analyse de cohortes, Analyse de funnels."
    },
    {
        "id":  "4.3.1",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.3 Communication & Culture de la Donnée",
        "skill":  "4.3.1 Visualisation & Communication",
        "description":  "Création de supports visuels clairs et de tableaux de bord intuitifs pour rendre les performances du produit accessibles à tous.",
        "junior":  "Sait créer des graphiques clairs et lisibles pour présenter des résultats. ",
        "senior":  "Maîtrise l'art de la visualisation de données. Choisit le bon type de graphique pour le bon message et conçoit des dashboards qui communiquent l'état de santé du produit en un coup d'œil.",
        "situation":  "Pour le reporting mensuel, le junior envoie une série de graphiques par email. Le senior conçoit un dashboard interactif qui permet au management de non seulement voir les KPIs, mais aussi de filtrer par segment ou par période pour explorer les données par eux-mêmes. ",
        "tools":  "Outils de Business Intelligence (Tableau, Looker), Data Viz "
    },
    {
        "id":  "4.3.2",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.3 Communication & Culture de la Donnée",
        "skill":  "4.3.2 Instaurer une Culture Data-Informed",
        "description":  "Promotion de l'usage systématique de la donnée comme preuve dans les prises de décision à tous les niveaux de l'organisation.",
        "junior":  "Utilise la donnée dans ses spécifications et ses rétrospectives pour justifier ses choix.",
        "senior":  "Évangélise l'utilisation de la donnée à tous les niveaux. Met en place des rituels et des outils pour que chacun (designers, développeurs, marketeurs) ait accès à la donnée et soit encouragé à l'utiliser pour prendre de meilleures décisions.",
        "situation":  "Le senior instaure une \"Revue de Métriques\" hebdomadaire où l'équipe analyse ensemble les performances de la semaine passée. Il donne des formations aux non-spécialistes pour qu'ils puissent construire leurs propres rapports et être plus autonomes.",
        "tools":  "Rituels de revue de métriques, Démocratisation de l'accès à la donnée "
    },
    {
        "id":  "4.4.1",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.4 Fiabilité & Gouvernance de la Donnée",
        "skill":  "4.4.1 Qualité & Intégrité",
        "description":  "Capacité à auditer et garantir la fiabilité de la donnée collectée en identifiant les anomalies, les doublons ou les biais de collecte.",
        "junior":  "Sait identifier une anomalie évidente dans un dashboard (ex: chute brutale de trafic) et remonter l'alerte aux équipes techniques.",
        "senior":  "Met en place des tests de santé de la donnée (Data Health Checks) et collabore avec les Data Engineers pour assurer la robustesse des pipelines.",
        "situation":  "Lors de l'analyse d'un test A/B, le PM détecte une incohérence dans les logs d'événements et suspend le test pour corriger le tracking avant de prendre une décision erronée.",
        "tools":  "Data Mapping, Data Lineage"
    },
    {
        "id":  "4.4.2",
        "cat":  "4. Culture & Maîtrise de la Donnée",
        "sub":  "4.4 Fiabilité & Gouvernance de la Donnée",
        "skill":  "4.4.2 Gouvernance",
        "description":  "Organisation et sécurisation du cycle de vie de la donnée (collecte, stockage, accès, suppression) pour garantir sa disponibilité, sa documentation et sa conformité légale (RGPD).",
        "junior":  "Sait utiliser le dictionnaire de données interne, comprend qui possède quelle donnée (Ownership) et applique rigoureusement les règles de confidentialité de base.",
        "senior":  "Définit les standards de documentation (Data Dictionary), pilote la stratégie de classification des données et assure le \"Privacy by Design\" sur des périmètres complexes ou multi-pays.",
        "situation":  "Lors du lancement d'une fonctionnalité de parrainage, le PM définit précisément quelles données sont collectées, leur durée de rétention et coordonne avec le DPO pour s'assurer que le registre des traitements est à jour.",
        "tools":  "Data Mapping, Data Lineage, Privacy by Design, ROPA (Registre des activités de traitement)"
    },
    {
        "id":  "5.1.1",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.1 Maîtrise des Principes de Product Design",
        "skill":  "5.1.1 Principes d'Ergonomie & Design d'Interaction",
        "description":  "Connaissance des lois de l'UX et de la psychologie cognitive pour concevoir des interfaces intuitives et sans friction.",
        "junior":  "Comprend et sait appliquer les heuristiques d'ergonomie (ex: Nielsen) et les lois de l'UX pour donner un feedback constructif sur des maquettes.",
        "senior":  "Maîtrise les patterns de design complexes (ex: gestion de données denses, visualisation). Sait challenger les propositions du designer pour pousser la simplicité et l'efficacité de l'expérience au maximum.",
        "situation":  "Face à un formulaire complexe, le junior suggère de mieux regrouper les champs. Le senior propose de le scinder en plusieurs étapes, en utilisant le principe de \"divulgation progressive\" pour ne pas submerger l'utilisateur. ",
        "tools":  "Heuristiques de Nielsen, Lois UX (Gestalt Principles), Bastien & Scapin (grille audit)."
    },
    {
        "id":  "5.1.2",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.1 Maîtrise des Principes de Product Design",
        "skill":  "5.1.2 Compréhension du Processus de Design",
        "description":  "Maîtrise du cycle de conception centrée utilisateur, de la phase d'empathie jusqu'au prototypage haute fidélité.",
        "junior":  "Comprend les différentes phases du processus de design (recherche, idéation, prototypage, test) et y participe activement. ",
        "senior":  "Collabore avec le Design Lead pour définir la stratégie de design. Sait quand utiliser un Design Sprint, quand prototyper en basse ou haute fidélité, et comment intégrer le feedback utilisateur en continu.",
        "situation":  "Le senior, face à un problème ambigu et stratégique, décide de lancer un Design Sprint d'une semaine avec des parties prenantes clés pour explorer le problème et co-créer une solution testable, plutôt que de se lancer directement dans des maquettes.",
        "tools":  "Design Thinking, Double Diamant, Design Sprints, Brief Design"
    },
    {
        "id":  "5.1.3",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.1 Maîtrise des Principes de Product Design",
        "skill":  "5.1.3 Culture du Design System",
        "description":  "Connaissance et promotion d'une bibliothèque de composants standardisés pour assurer la cohérence visuelle et l'efficacité technique.",
        "junior":  "Utilise les composants du Design System existant, et leurs noms, dans ses spécifications pour assurer la cohérence.",
        "senior":  "Agit comme un sponsor du Design System. Collabore avec les designers et les développeurs pour le faire évoluer, en arbitrant entre la création d'un nouveau composant et la réutilisation d'un existant.",
        "situation":  "L'é'quipe a besoin d'un nouveau type de graphique. Le junior demande simplement sa création. Le senior organise une réunion avec le designer et le front-end lead pour déterminer si ce besoin est unique ou s'il justifie la création d'un nouveau \"atome\" réutilisable dans le Design System.",
        "tools":  "Atomic Design, Design Tokens"
    },
    {
        "id":  "5.2.1",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.2 Maîtrise des Principes d'Ingénierie",
        "skill":  "5.2.1 Compréhension de l'Architecture Logicielle",
        "description":  "Connaissance structurelle du fonctionnement technique du produit (API, BDD, services) pour en comprendre les capacités et les limites.",
        "junior":  "Comprend l'architecture de son produit (front-end, back-end, API REST, base de données). ",
        "senior":  "A une compréhension stratégique des choix d'architecture (microservices, monolithe, serverless), de leurs impacts sur la performance, la scalabilité et le coût. Sait discuter de ces sujets avec le CTO.",
        "situation":  "L'équipe propose une solution rapide mais qui crée un couplage fort entre deux services. Le senior, anticipant les problèmes de scalabilité futurs, challenge l'équipe pour trouver une solution basée sur une architecture à base d'événements, même si elle est plus complexe à court terme.",
        "tools":  "CAP Theorem, Bases Architecture, API Gateway."
    },
    {
        "id":  "5.2.2",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.2 Maîtrise des Principes d'Ingénierie",
        "skill":  "5.2.2 Compréhension du Cycle de Développement",
        "description":  "Connaissance des étapes techniques de création d'un logiciel, de l'écriture du code jusqu'à sa maintenance en production.",
        "junior":  "Comprend et participe aux rituels de son équipe (Scrum, Kanban). Sait ce qu'est une Pull Request et le versionnement (Git).",
        "senior":  "Comprend l'ensemble du cycle de vie du logiciel, y compris les enjeux de CI/CD, de qualité (tests unitaires, E2E) et de la dette technique. Sait négocier l'allocation de bande passante pour la refactorisation.",
        "situation":  "Le senior, voyant la vélocité de l'équipe diminuer, analyse les indicateurs de qualité et justifie auprès de la direction la nécessité de dédier 20% du prochain trimestre à la réduction de la dette technique pour accélérer les développements futurs.",
        "tools":  "CI/CD, Test Pyramid."
    },
    {
        "id":  "5.2.3",
        "cat":  "5. Socle Technique & Design",
        "sub":  "5.2 Maîtrise des Principes d'Ingénierie",
        "skill":  "5.2.3 Fondamentaux du Cloud & Infrastructure",
        "description":  "Compréhension des concepts d'hébergement cloud, de scalabilité et de services managés pour optimiser les performances et les coûts du produit.",
        "junior":  "Comprend les concepts de base du cloud (SaaS, PaaS, IaaS) et sait localiser les services utilisés par son produit dans la console.",
        "senior":  "Capable de challenger l'architecture cloud pour optimiser la disponibilité (Multi-AZ) et les coûts. Comprend les enjeux de serverless vs conteneurs.",
        "situation":  "Lors d'une hausse soudaine de trafic, le senior discute avec les DevOps de la stratégie d'auto-scaling et du choix des instances pour maintenir la performance sans faire exploser le budget.",
        "tools":  "Cloud Migration, FinOps, Serverless Architecture, Well-Architected Framework."
    },
    {
        "id":  "6.1.1",
        "cat":  "6. Product Ops",
        "sub":  "6.1 Processus & Outils",
        "skill":  "6.1.1 Standardisation des Processus",
        "description":  "Création et maintenance de méthodes de travail uniformes au sein de l'organisation pour améliorer l'efficacité collective.",
        "junior":  "Applique les processus et les outils définis par l'équipe (templates de specs, process de release).",
        "senior":  "Conçoit, déploie et améliore les processus de l'organisation Produit (ex: processus de Discovery, de priorisation trimestrielle, de communication de roadmap) pour garantir la cohérence et l'efficacité à l'échelle.",
        "situation":  "Le senior met en place un \"Product Playbook\" centralisé documentant tous les processus, les outils et les bonnes pratiques, afin d'accélérer l'onboarding des nouveaux PMs et d'harmoniser les méthodes de travail.",
        "tools":  null
    },
    {
        "id":  "6.1.2",
        "cat":  "6. Product Ops",
        "sub":  "6.1 Processus & Outils",
        "skill":  "6.1.2 Gouvernance de la documentation Produit",
        "description":  "Gestion de l'intégrité, de l'accessibilité et de la documentation des données partagées pour assurer une source de vérité unique.",
        "junior":  "S'assure que les information produit (données, features, how to...) de son périmètre sont fiables et bien documentées.",
        "senior":  "Met en place une gouvernance pour les outils et les données Produit (ex: un dictionnaire de données partagé, des règles claires pour la création d'événements de tracking) pour que tout le monde s'appuie sur une source de vérité unique et fiable.",
        "situation":  "Le senior, constatant que chaque équipe nomme ses événements de tracking différemment, lance un projet de standardisation et crée un processus de validation pour tout nouvel événement, garantissant la propreté de la donnée à long terme.",
        "tools":  "Knowledge management, Data dictionnary & governance"
    },
    {
        "id":  "6.2.1",
        "cat":  "6. Product Ops",
        "sub":  "6.2 Organisation",
        "skill":  "6.2.1 Organisation des équipes",
        "description":  "Définition de la structure, des rôles et des objectifs pour aligner l'équipe sur une vision commune et garantir que chacun comprenne sa contribution.",
        "junior":  "Comprend et applique le cadre organisationnel (son rôle, ses responsabilités, ses objectifs) dans son périmètre. contribue à la définition de ses propres objectifs (okr) et à l'évaluation de ses compétences.",
        "senior":  "Conçoit et fait évoluer l'organisation de l'équipe produit : définition des rôles et des responsabilités, alignement sur les objectifs stratégiques (okr), création des fiches de poste et des matrices de compétences pour assurer la performance et le développement des talents.",
        "situation":  "En réponse à une croissance rapide, le senior mène un projet de réorganisation. il anime des ateliers pour redéfinir les rôles avec un raci clair, met en place des okr pour chaque squad et met à jour la matrice de compétences pour identifier les besoins en recrutement et en formation.",
        "tools":  "conception organisationnelle, RACI / RAPID, OKR, modélisation de compétences, career pathing"
    },
    {
        "id":  "6.2.2",
        "cat":  "6. Product Ops",
        "sub":  "6.2 Organisation",
        "skill":  "6.2.2 Pilotage & Gouvernance",
        "description":  "Mise en place des instances, des indicateurs et des rituels nécessaires pour piloter la performance de l'organisation produit et assurer l'alignement avec la stratégie de l'entreprise et avec les équipes Métiers & Tech.",
        "junior":  "Prépare les supports pour les instances de gouvernance (ex: mise à jour des kpi, préparation d'une démo). participe activement aux rituels de son équipe (daily, weekly, retro) et comprend comment sa squad contribue aux KPI globaux.",
        "senior":  "VConçoit, met en Å“uvre et anime les instances de gouvernance produit (comités, rituels) pour assurer la bonne circulation de l'information et l'alignement stratégique. il définit les KPI pertinents pour mesurer la performance de l'organisation et construit les tableaux de bord associés.",
        "situation":  "Le senior instaure une Product review mensuelle où chaque équipe présente ses avancées, ses KPI et ses prochains défis. ce rituel permet aux directeurs d'avoir une vision claire de la performance, de débloquer des situations et de garantir l'alignement entre les équipes.",
        "tools":  "Comitologie & rituels (comités stratégique, tactique, opérationnel), indicateurs partagés (OKR, north star metric), gestion de portefeuille projets"
    },
    {
        "id":  "6.3.1",
        "cat":  "6. Product Ops",
        "sub":  "6.3 Culture",
        "skill":  "6.3.1 Facilitation et animation d'ateliers",
        "description":  "Maîtrise des techniques de dynamique de groupe pour guider une équipe multidisciplinaire vers un objectif de décision, d'idéation ou de résolution de problèmes.",
        "junior":  "Participe activement aux ateliers et peut co-animer des ateliers simples (ex: rétrospective).",
        "senior":  "Conçoit et facilite des ateliers complexes (ex: cadrage stratégique, idéation) avec des groupes multidisciplinaires et des participants de haut niveau, en s'assurant que l'objectif est atteint.",
        "situation":  "Pour lancer un nouveau projet d'envergure, le senior conçoit et anime un kick-off de 2 jours avec 15 personnes (produit, tech, design, marketing, ventes) pour créer une vision partagée, identifier les risques et définir la feuille de route initiale.",
        "tools":  "Animation d'ateliers (définir lesquels)"
    },
    {
        "id":  "6.3.2",
        "cat":  "6. Product Ops",
        "sub":  "6.3 Culture",
        "skill":  "6.3.2 Coaching & Mentorat",
        "description":  "Acoompagnement des membres de l'équipe ou des pairs dans leur développement professionnel et la montée en compétences de l'organisation.",
        "junior":  "Se concentre sur son propre développement. Partage ses connaissances de manière informelle avec ses pairs. Donne des feedbacks constructifs à ses pairs.",
        "senior":  "Agit comme un coach pour l'équipe et comme un mentor pour les PMs plus juniors. Contribue activement à la montée en compétence de l'organisation produit.",
        "situation":  "Le senior ne donne pas la solution à un PM junior bloqué sur une priorisation. Il lui pose des questions basées sur le modèle GROW (Goal, Reality, Options, Will) pour l'aider à structurer sa pensée et à trouver la solution par lui-même.",
        "tools":  "GROW Model, Feedback Constructif (DESC)"
    },
    {
        "id":  "7.1.1",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.1 Fondamentaux IA",
        "skill":  "7.1.1 Fondamentaux et cas d'usage",
        "description":  "Comprendre les types de modèles (ML, LLM, génératif), les notions clés (entraînement, fine-tuning, contexte, hallucination). Savoir associer un problème métier au bon type de solution : classification, génération, RAG, agents.",
        "junior":  "Distingue le ML classique de l'IA générative. Sait identifier si un problème nécessite du RAG ou du Fine-tuning.",
        "senior":  "Capable de challenger le choix d'un modèle (ex: Llama vs GPT-4) selon la complexité de la tâche et les contraintes de latence.",
        "situation":  "Lors du kick-off d'un projet de moteur de recherche interne, le PM propose une architecture RAG plutôt qu'un entraînement complet pour garantir la fraîcheur des données.",
        "tools":  "AI Use Case Canvas."
    },
    {
        "id":  "7.1.2",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.1 Fondamentaux IA",
        "skill":  "7.1.2 FinOps",
        "description":  "Comprendre les modèles de coûts d'un produit IA : tokens, inférence, stockage vectoriel. Définir stratégie de Build vs Buy vs Fine-tune. Évaluer coût / performance / confidentialité / time-to-market.",
        "junior":  "Comprend la notion de \"Token\" et sait que l'inférence a un coût récurrent. Sait lire une facture API de base.",
        "senior":  "Modélise le coût d'exploitation à l'échelle (1M d'utilisateurs) et définit des stratégies de mise en cache ou de modèles plus petits pour optimiser le ROI.",
        "situation":  "Pour une feature de résumé automatique, le PM décide d'utiliser GPT-4o-mini pour 90% des cas simples afin de diviser les coûts par 10.",
        "tools":  "Unit Cost Analysis."
    },
    {
        "id":  "7.1.3",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.1 Fondamentaux IA",
        "skill":  "7.1.3 Prompt Engineering",
        "description":  "Rédiger et itérer sur des system prompts. Tester les comportements d'un LLM pour mieux spécifier les features IA et collaborer efficacement avec les équipes tech.",
        "junior":  "Sait rédiger des prompts structurés (Context, Task, Constraints). Utilise le \"Few-shot prompting\".",
        "senior":  "Maîtrise les techniques avancées (Chain-of-Thought, ReAct). Capable de versionner et de tester systématiquement la robustesse des prompts.",
        "situation":  "Le PM itère sur le \"System Prompt\" d'un agent de support pour s'assurer qu'il ne sort jamais de son ton de marque, même face à des questions pièges.",
        "tools":  "CO-STAR, RISEN"
    },
    {
        "id":  "7.2.1",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.2 Stratégie & Opportunités IA",
        "skill":  "7.2.1 Identification d'opportunités IA",
        "description":  "Détecter les problèmes métiers, construire et prioriser un backlog IA, rédiger des hypothèses de valeur.",
        "junior":  "Identifie des opportunités IA simples. Priorise le backlog en fonction de la faisabilité technique estimée par les devs.",
        "senior":  "Définit une roadmap \"AI-first\" où l'IA apporte un avantage compétitif durable (moat). Anticipe les dérives de performance.",
        "situation":  "Le PM priorise le développement d'un classificateur de tickets client car l'analyse d'impact montre un gain de 20% du temps des Ops.",
        "tools":  "Opportunity Solution Tree"
    },
    {
        "id":  "7.2.2",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.2 Stratégie & Opportunités IA",
        "skill":  "7.2.2 Stratégie data & Valeur business",
        "description":  "Définir les besoins en données (collecte, labelling, qualité). Construire le business case, définir des KPIs adaptés (au-delà de l'accuracy) et mesurer le ROI.",
        "junior":  "Sait quelles données sont nécessaires pour alimenter une feature IA. Suit des KPIs de base (Accuracy).",
        "senior":  "Définit la stratégie d'acquisition et de gestion des données comme un avantage concurrentiel (\"data moat\"). Met en place des boucles de rétroaction (\"flywheels\") où le produit génère des données qui améliorent le modèle, ce qui améliore le produit.",
        "situation":  "Pour un outil de recommandation, le PM ne suit pas juste le clic, mais le \"Business Lift\" (augmentation du panier moyen) généré par l'IA.",
        "tools":  "Data Flywheel, Boucles de Rétroaction (Feedback Loops)."
    },
    {
        "id":  "7.3.1",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.3 Delivery & Cycle de vie du modèle",
        "skill":  "7.3.1 Annotation & Préparation des Données",
        "description":  "Supervision du processus de labellisation et de nettoyage des données pour garantir la fiabilité des jeux d'entraînement. Mettre en place les boucles de feedback utilisateur pour améliorer le modèle.",
        "junior":  "Comprend l'importance d'un \"Golden Dataset\". Aide à définir les labels pour les tests de performance.",
        "senior":  "Conçoit et supervise la stratégie d'annotation : choix des outils (ex: Labelbox), mise en place du contrôle qualité, et décision sur l'externalisation ou non (ex: via Scale AI). ",
        "situation":  "Pour un projet de reconnaissance d'images, le senior met en place un processus en deux étapes : une première passe d'annotation par une équipe externe, puis une validation par une équipe d'experts internes pour garantir la qualité des données d'entraînement.",
        "tools":  "Data Labeling & Annotation Platforms, Human-in-the-loop"
    },
    {
        "id":  "7.3.2",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.3 Delivery & Cycle de vie du modèle",
        "skill":  "7.3.2 Évaluation du modèle, Monitoring & red-teaming",
        "description":  "Lire et interpréter les métriques, organiser des A/B tests et évaluations humaines. Challenger les data scientists sur les benchmarks métier vs techniques. Piloter les alertes de dérive, gérer les incidents. Organiser des sessions de red-teaming pour tester les hallucinations et comportements inattendus.",
        "junior":  "Sait lire une matrice de confusion. Comprend la différence entre Précision et Rappel (Recall).",
        "senior":  "Définit des seuils d'acceptation métier. Arbitre entre \"faux positifs\" et \"faux négatifs\" selon l'impact utilisateur. Challenge les Data Scientists sur leurs choix.",
        "situation":  "Sur un détecteur de fraude, l'expert PM choisit de privilégier le Rappel pour ne rater aucune fraude, quitte à avoir quelques fausses alertes. Met en place un système d'alert de “Model Drift”",
        "tools":  "Evaluation Benchmarks, MLOps"
    },
    {
        "id":  "7.4.1",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.4 Expérience utilisateur & IA responsable",
        "skill":  "7.4.1 Design d'Interaction pour l'IA",
        "description":  "Concevoir des interfaces prenant en compte les spécificités de l'IA : affichage de l'incertitude, gestion des erreurs, explainability, human-in-the-loop. Traduire les contraintes du modèle en choix UX.",
        "junior":  "Participe à la conception d'interfaces pour des fonctionnalités IA, en se concentrant sur la clarté. Ajoute des mentions \"généré par IA\". Prévoit des boutons de feedback (thumbs up/down).",
        "senior":  "Maîtrise les patterns de design spécifiques à l'IA : comment gérer l'incertitude, expliquer les décisions du modèle, permettre à l'utilisateur de corriger l'IA et de garder le contrôle.",
        "situation":  "Pour un système de recommandation, le senior ne se contente pas d'afficher les produits. Il conçoit une interface qui explique pourquoi un produit est recommandé (\"Parce que vous avez aimé X\") et permet à l'utilisateur d'affiner les résultats (\"Montrez-moi moins de produits comme celui-ci\").",
        "tools":  "Google PAIR Guidebook, Explainable AI (XAI), Human-in-the-loop, Niveaux de Confiance. "
    },
    {
        "id":  "7.4.2",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.4 Expérience utilisateur & IA responsable",
        "skill":  "7.4.2 Design conversationnel",
        "description":  "Concevoir des interfaces conversationnelles : flux de conversation, gestion des ruptures et sorties hors-scope, calibration du ton et de la personnalité.",
        "junior":  "Crée des flux linéaires (arbres de décision) sur la base d'échanges avec le métier.",
        "senior":  "Gère le contexte multi-tours, les interruptions et les sorties de scope avec élégance. Travaille la personnalité de l'IA.",
        "situation":  "Le PM conçoit un assistant de voyage capable de se souvenir d'une préférence citée 5 messages plus tôt (\"comme je disais, je préfère le train\").",
        "tools":  "Cooperative Principle (Grice)"
    },
    {
        "id":  "7.4.3",
        "cat":  "7. Culture et maîtrise de l'IA",
        "sub":  "7.4 Expérience utilisateur & IA responsable",
        "skill":  "7.4.3 Éthique, Conformité & IA Responsable",
        "description":  "Identifier les risques de biais et d'usage irresponsable d'un produit IA. Connaître les grands principes de l'AI Act et du RGPD pour collaborer avec les équipes juridiques et techniques, et intégrer des garde-fous dès la conception.",
        "junior":  "Est sensibilisé aux biais potentiels dans les données et les algorithmes. Connaît l'existence de l'AI Act. Vérifie que les données utilisées sont conformes au RGPD.",
        "senior":  "Réalise des audits de biais. Documente la \"Fiche de Transparence\" du modèle et anticipe les risques de sécurité (Prompt Injection).",
        "situation":  "Avant de lancer un modèle de scoring de CV, le senior organise un atelier \"Red Team\" où une équipe est chargée d'imaginer toutes les manières dont le modèle pourrait être biaisé ou utilisé de manière discriminatoire, et met en place des garde-fous pour empêcher ces scénarios.",
        "tools":  "AI Ethics Frameworks (ex: Microsoft, Google), Fairness checklists."
    },
    {
        "id":  "8.1.1",
        "cat":  "8. AI Building",
        "sub":  "8.1 Building & AI Agentic",
        "skill":  "8.1.1 Prototypage low-code & no-code",
        "description":  "Construire des workflows, agents et apps fonctionnelles sans coder ou avec peu de code. Valider une hypothèse produit rapidement. Choisir la bonne plateforme selon le contexte.",
        "junior":  "Sait créer un agent conversationnel simple via Vertex AI Agent Builder (Agent Designer) en utilisant des documents PDF ou des URLs comme source de données.",
        "senior":  "Assemble des applications métier complexes avec AppSheet intégrées à Gemini, ou crée des automatisations via Gemini pour Google Workspace (AppScript + IA).",
        "situation":  "Le PM crée en quelques heures un agent \"FAQ Interne\" pour les RH en téléchargeant les politiques de l'entreprise dans Vertex AI Search, validant ainsi l'utilité du RAG sans écrire une ligne de code.",
        "tools":  "Lean Startup (MVP), Prompt-to-App, Rapid Prototyping"
    },
    {
        "id":  "8.1.2",
        "cat":  "8. AI Building",
        "sub":  "8.1 Building & AI Agentic",
        "skill":  "8.1.2 Architecture agentique & RAG",
        "description":  "Concevoir et orchestrer des agents IA autonomes, des pipelines RAG, des architectures multi-agents. Connecter l'IA à des sources de données externes via MCP et APIs.",
        "junior":  "Comprend comment connecter un modèle Gemini à une base BigQuery ou un bucket Cloud Storage. Sait configurer un index vectoriel simple.",
        "senior":  "Orchestre des systèmes multi-agents complexes à l'aide de l'ADK (Agent Development Kit) de Google. Maîtrise le \"Grounding\" sur Google Search ou sur des données privées (BigQuery/Vector Search).",
        "situation":  "Pour un outil d'aide à la vente, le PM définit une architecture où un premier agent extrait les besoins d'un e-mail, et un second interroge le catalogue produit dans BigQuery pour générer un devis personnalisé.",
        "tools":  "Agentic Workflows, RAG Architecture"
    }
]
;

// ===== ASSESSMENT TEST DATA =====
// Questions used in the self-assessment test (same structure as explorerData)
const testQuestions = explorerData;

// For backward compatibility
const skillsData = explorerData;

// ===== AVERAGE PM PROFILE BENCHMARK =====
// Reference profile from aggregated assessments of successful PMs
const averagePMProfile = {
    "1. Stratégie & Vision Produit": 2.0,
    "2. Découverte (Discovery)": 2.0,
    "3. Conception & Livraison (Delivery)": 2.0,
    "4. Data Culture": 2.0,
    "5. Socle Tech & Design": 2.0,
    "6. Product Ops": 2.0,
    "7. Culture et Maîtrise de l'IA": 2.0,
    "8. AI Building": 2.0
};

// ===== PM PROFILE ARCHETYPES =====
const profileRules = [
  {
    "cat": "1. Stratégie & Vision Produit",
    "title": "Le Stratège Produit",
    "desc": "Vous êtes le garant de la viabilité économique à long terme. Vous savez lire entre les lignes des tendances de marché pour identifier les opportunités de rupture (Product-Led Growth, nouveaux business models) et embarquer les équipes avec vous.",
    "mission": "Pivoter d'un modèle de vente 'on-premise' vers le SaaS, ou définir la stratégie d'internationalisation d'un produit.",
    "improve": "Approfondir la modélisation financière (P&L, LTV/CAC) et la veille technologique anticyclique.",
    "improveWhy": "Avoir une vision sans comprendre l'économie du produit mène à l'échec commercial. La stratégie permet d'arbitrer les fonctionnalités en fonction de leur ROI réel.",
    "improveMission": "Mener une analyse de la menace concurrentielle sur 3 ans et redéfinir le pricing d'une ligne de produit majeure."
  },
  {
    "cat": "2. Découverte (Discovery)",
    "title": "L'Explorateur d'Insights",
    "desc": "Votre obsession est de tuer le risque avant de toucher au code. Vous maîtrisez l'art de l'entretien ethnographique pour déceler ce que les utilisateurs ne disent pas explicitement.",
    "mission": "Lancer un nouveau module sur un marché inconnu ou redresser un produit dont l'usage stagne malgré les nouvelles features.",
    "improve": "Systématiser l'expérimentation rapide (Fake Door, Concierge MVP) pour ne pas rester bloqué en phase d'analyse pure.",
    "improveWhy": "Une Discovery trop longue ou purement théorique devient un 'Analysis Paralysis'. Savoir valider par l'expérience permet de gagner des mois de développement inutile.",
    "improveMission": "Valider la désirabilité d'une nouvelle offre via une campagne de pré-vente ou un prototype interactif testé par 20 clients 'early adopters'."
  },
  {
    "cat": "3. Conception & Livraison (Delivery)",
    "title": "L'Orfèvre du Delivery",
    "desc": "Vous transformez le backlog en une machine de guerre. Votre expertise ne s'arrête pas au ticket Jira : vous pilotez la qualité perçue, la stratégie de rollout et l'adoption post-lancement.",
    "mission": "Gérer une migration technique complexe sans interruption de service ou orchestrer un lancement mondial synchronisé.",
    "improve": "Développer une vision 'Outcomes over Outputs' : ne plus mesurer le succès au nombre de tickets fermés, mais à l'impact réel des livraisons.",
    "improveWhy": "Un delivery performant qui livre les mauvaises choses est un gaspillage industriel. La rigueur doit être mise au service de la valeur, pas seulement du calendrier.",
    "improveMission": "Mettre en place un système de 'Feature Flagging' pour un déploiement progressif et piloter la réduction de la dette technique."
  },
  {
    "cat": "4. Data Culture",
    "title": "Le Data Alchimiste",
    "desc": "Pour vous, une intuition sans donnée est juste une opinion. Vous savez transformer des tera-octets de logs en une narration limpide qui dicte la roadmap via une North Star Metric.",
    "mission": "Définir l'infrastructure de mesure d'un produit complexe ou auditer la performance du funnel de conversion pour identifier des 'quick wins'.",
    "improve": "Maîtriser le SQL pour gagner en autonomie vis-à-vis des data analysts et comprendre les biais statistiques (significativité).",
    "improveWhy": "Savoir manipuler la donnée permet d'identifier des opportunités invisibles à l'œil nu (ex: comportement spécifique d'une cohorte) et de prouver la valeur produite.",
    "improveMission": "Concevoir un dashboard de pilotage pour le CPO et identifier une corrélation entre une feature mineure et la rétention à J+30."
  },
  {
    "cat": "5. Socle Tech & Design",
    "title": "Le Product Architect",
    "desc": "Vous êtes le traducteur universel. Vous comprenez l'architecture microservices autant que les principes de divulgation progressive en UX. Vous construisez des produits scalables par design.",
    "mission": "Superviser la création d'un Design System cross-plateforme ou arbitrer un choix de base de données stratégique.",
    "improve": "Renforcer la culture du Design System et la compréhension des enjeux CI/CD (intégration et déploiement continus).",
    "improveWhy": "Un PM qui ignore les contraintes techniques crée de la frustration en dev ; un PM qui ignore le design crée de la frustration en usage. L'architecture fait le pont.",
    "improveMission": "Mener un audit d'accessibilité (RGAA) ou simplifier un parcours utilisateur complexe en réduisant la charge cognitive."
  },
  {
    "cat": "6. Product Ops",
    "title": "L'Ingénieur de l'Organisation",
    "desc": "Vous êtes le 'PM des PMs'. Vous concevez le système d'exploitation de l'équipe produit pour que l'efficacité soit une conséquence du processus, pas un effort individuel.",
    "mission": "Standardiser les outils de discovery sur 10 squads ou créer le centre de connaissance (Product Playbook) de l'entreprise.",
    "improve": "Mettre en place une gouvernance de la donnée produit et des rituels d'alignement inter-squads.",
    "improveWhy": "À l'échelle, sans Product Ops, l'organisation se fragmente. La standardisation permet de partager les apprentissages et d'éviter que chaque équipe ne réinvente la roue.",
    "improveMission": "Déployer un nouveau framework de priorisation (type RICE) uniformisé et automatiser le reporting de roadmap pour les parties prenantes."
  },
  {
    "cat": "7. Culture et Maîtrise de l'IA",
    "title": "L'AI Manager",
    "desc": "Vous ne voyez pas l'IA comme un gadget, mais comme un nouveau matériau de construction. Vous maîtrisez le cycle de vie des modèles et les boucles de rétroaction de données (flywheels).",
    "mission": "Transformer un service client manuel en une expérience augmentée par un LLM fine-tuné ou automatiser la détection de fraude.",
    "improve": "Approfondir la gestion du 'Model Drift' (dérive des modèles) et les enjeux d'éthique et de biais algorithmiques.",
    "improveWhy": "L'IA introduit une incertitude que le logiciel classique n'a pas. Comprendre le MLOps est crucial pour garantir que le produit reste performant et éthique dans le temps.",
    "improveMission": "Mettre en place une stratégie d'annotation de données 'Human-in-the-loop' pour améliorer la précision d'un modèle prédictif métier."
  },
  {
    "cat": "8. AI Building",
    "title": "Le Solo Builder",
    "desc": "Vous êtes débrouillard et savez utiliser toute la puissance des outils IA pour accélerer le processus de développement.",
    "mission": "Accélérer les cycles d'itération au sein d'une équipe innovation pour dérisquer rapidement une nouvelle idée de produit IA ou construire un prototype fonctionnel en low-code pour valider une hypothèse.",
    "improve": "Maîtriser les plateformes de prototypage no-code/low-code et comprendre les architectures agentiques pour construire des applications IA plus complexes.",
    "improveWhy": "Dans un monde où les outils de développement deviennent de plus en plus accessibles, la capacité à construire rapidement des prototypes IA devient un avantage compétitif pour valider des idées sans mobiliser des ressources techniques lourdes.",
    "improveMission": "Créer un prototype d'assistant virtuel pour les équipes internes en utilisant une plateforme no-code, et itérer rapidement en fonction des retours utilisateurs pour valider l'utilité du concept avant de mobiliser des ressources de développement."
  }
]

