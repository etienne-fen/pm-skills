// data.js

// ===== SKILL EXPLORER DATA =====
// All available skills for the explorer view
const explorerData = [
    {
        "id":  "1.1.1",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Élaboration de la Stratégie",
        "skill":  "1.1.1 Analyse du Marché & Concurrence",
        "description":  "Veille active et analyse critique des tendances sectorielles et des mouvements des concurrents pour identifier des opportunités de différenciation.",
        "junior":  "Effectue une veille sur des concurrents directs et des fonctionnalités spécifiques à la demande de son manager.",
        "senior":  "Mène une analyse continue et pro-active du marché (tendances macro, technologies émergentes, mouvements concurrentiels) pour identifier des opportunités de rupture et des menaces stratégiques.",
        "situation":  "Tu es PM sur un produit d'analytics BtoB. Un concurrent annonce une feature d'IA générative qui empiète sur ta proposition de valeur, et trois clients clés t'en parlent en moins d'une semaine. Le CPO te demande sous 10 jours une lecture du marché et une recommandation : réagir, ignorer ou pivoter ?",
        "tools":  "SWOT, PESTEL, Forces de Porter, Wardley Maps"
    },
    {
        "id":  "1.1.2",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Élaboration de la Stratégie",
        "skill":  "1.1.2 Vision Produit",
        "description":  "Définition d'un état futur ambitieux et inspirant pour le produit, servant de boussole à long terme pour toutes les décisions tactiques.",
        "junior":  "Comprend, articule et peut expliquer la vision du produit à son équipe. S'assure que son backlog est aligné avec la vision",
        "senior":  "Définit, possède et évangélise une vision produit inspirante sur 3-5 ans. Il s'assure qu'elle est comprise, partagée et qu'elle guide les décisions à tous les niveaux de l'entreprise.",
        "situation":  "Tu es PM lead sur un produit qui grandit vite mais sans cap clair, et chaque équipe construit dans sa direction. Le CEO te demande de formaliser une vision produit à 3 ans qui inspire les équipes, oriente les arbitrages, et tienne la route face au comité de direction.",
        "tools":  "V2MOM (Vision, Values, Methods, Obstacles, Measures), Golden Circle, Product Vision Board."
    },
    {
        "id":  "1.1.3",
        "cat":  "1. Stratégie & Vision Produit",
        "sub":  "1.1 Élaboration de la Stratégie",
        "skill":  "1.1.3 Business & Modèle Éco.",
        "description":  "Compréhension des mécanismes de création de valeur financière et de rentabilité du produit au sein de l'entreprise.",
        "junior":  "Comprend le modèle économique du produit et l'impact de son périmètre sur les KPIs principaux (ex: revenus, acquisition). Calcule le ROI de ses fonctionnalités",
        "senior":  "Construit, modélise et optimise le modèle économique. Prend des décisions stratégiques (pricing, nouveaux marchés) en se basant sur une analyse financière approfondie (P&L, CAC, LTV).",
        "situation":  "Tu es PM sur un module SaaS facturé à la licence perpétuelle. La croissance des nouveaux contrats stagne mais la base installée est solide. La direction te demande de proposer un modèle économique alternatif (abonnement, usage, freemium) en chiffrant l'impact sur le revenu et la valorisation.",
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
        "situation":  "Tu es PM sur une marketplace. À l'approche du planning annuel, tu reçois 40 demandes de features venant des ventes, du support et de la direction, toutes \"prioritaires\". Tu dois construire et présenter au CODIR une roadmap sur 12 mois qui tienne face aux arbitrages.",
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
        "situation":  "Tu es PM sur un logiciel BtoB. Le directeur commercial débarque en demandant une feature sur-mesure pour un client à 500k€ ARR, hors roadmap. Tech et design s'y opposent car cela retarde un chantier stratégique. Tu dois trancher et défendre ta décision sans casser la relation.",
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
        "situation":  "Tu es PM et tu dois présenter ta roadmap trimestrielle au CODIR composé de profils non-produit (Finance, Sales, Ops). Tu sais qu'une liste de features va les perdre et qu'ils sortiront sans avoir compris pourquoi tu fais ces choix. Tu prépares ton intervention de 20 minutes.",
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
        "situation":  "Tu es PM sur une feature d'analytics qui nécessite de tracker finement le comportement des utilisateurs. Le DPO te signale un risque RGPD majeur deux semaines avant la livraison. Tu dois arbitrer entre respect du planning, conformité légale, et qualité de l'expérience utilisateur.",
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
        "situation":  "Tu es PM sur un outil SaaS utilisé quotidiennement par des opérationnels en entrepôt. Les retours quantitatifs sont bons mais l'adoption plafonne sur certains segments. Tu disposes de deux semaines et d'un budget research limité pour comprendre ce qui se joue vraiment côté utilisateur.",
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
        "situation":  "Tu es PM sur un site e-commerce. Le funnel d'activation montre une chute de 30% à une étape précise depuis 6 semaines. Personne ne sait pourquoi, et les hypothèses fusent en réunion. Tu dois structurer une analyse pour identifier la cause racine avant le prochain comité produit.",
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
        "situation":  "Tu es PM sur un outil de reporting. Le directeur commercial relaie une demande insistante de trois gros comptes : \"un bouton d'export Excel\". Avant d'embarquer la tech, tu dois décider quoi creuser et comment qualifier le vrai besoin sous-jacent.",
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
        "situation":  "Tu es PM et tu pars explorer une opportunité ambitieuse mais floue : repenser l'onboarding pour les équipes de plus de 50 utilisateurs. Tu as accès à un designer 2 jours par semaine et 3 semaines avant la prochaine étape. Tu dois choisir le bon niveau d'exploration et de prototypage.",
        "tools":  "Wireframing, Prototyping, Test Utilisateurs (guerilla ou non)"
    },
    {
        "id":  "2.2.3",
        "cat":  "2. Découverte & Validation d'Opportunités (Discovery)",
        "sub":  "2.2 Synthèse & Expérimentation",
        "skill":  "2.2.3 Expérimentation & Validation",
        "description":  "Mise en œuvre de tests rapides et peu coûteux (MVP, tests A/B) pour valider la valeur et la désirabilité avant le développement complet.",
        "junior":  "Met en place et mesure des A/B tests simples pour optimiser un élément (ex: un bouton, un titre).",
        "senior":  "Conçoit une stratégie d'expérimentation pour dé-risquer les 4 grands risques (valeur, utilisabilité, faisabilité, viabilité). Sait quand utiliser un prototype, un MVP \"Concierge\" ou un test de \"fausse porte\".",
        "situation":  "Tu es PM sur un produit et tu hésites à investir 4 mois de dev sur une feature d'IA générative coûteuse, sans certitude sur la demande réelle. Le CTO veut une validation avant d'engager l'équipe. Tu disposes d'un mois pour produire un signal exploitable.",
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
        "situation":  "Tu es PM et tu démarres avec une équipe tech qui se plaint de tickets flous, mal cadrés, qui génèrent des allers-retours en cours de sprint. Le lead dev t'interpelle ouvertement en rétro. Tu dois revoir la façon de spécifier sans pour autant tomber dans le tunnel documentaire.",
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
        "situation":  "Tu es PM et tu démarres le planning du prochain trimestre avec 12 initiatives candidates et la capacité d'en livrer 4. Tech, design, sales et support ont chacun leurs priorités. Tu dois construire une priorisation défendable et obtenir l'alignement avant la fin de la semaine.",
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
        "situation":  "Tu es PM dans une squad de 6 personnes. Les daily s'éternisent à 25 minutes, la rétro tourne à vide et plusieurs devs se plaignent en off de \"trop de rituels pour rien\". La vélocité commence à baisser. Tu dois reprendre la main sur l'animation sans casser l'autonomie de l'équipe.",
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
        "situation":  "Tu es PM sur une feature majeure dont le lancement est prévu demain matin et déjà annoncé aux clients. La QA remonte un bug fonctionnel ce soir à 18h, qui touche un cas d'usage minoritaire. Tu dois trancher avec la tech : on lance, on retarde, ou on livre en mode dégradé ?",
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
        "situation":  "Tu es PM et tu prépares le lancement d'une refonte majeure de l'interface, attendue depuis 18 mois et touchant 100% des utilisateurs. Tu sais que certains clients sensibles peuvent mal le vivre. Tu dois construire un plan de déploiement qui sécurise l'adoption sans bloquer l'impact.",
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
        "situation":  "Tu es PM sur un produit SaaS ByoB. Le CEO te demande \"des metrics pour suivre la santé du produit\" en vue du board du mois prochain. Tu n'as ni North Star Metric clair, ni dashboard partagé. Tu dois définir ce qu'on suit, pourquoi, et comment cela connecte au business.",
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
        "situation":  "Tu es PM sur une refonte qui va modifier le parcours principal du produit. La livraison est dans 6 semaines et le tracking actuel ne permettra pas de mesurer l'impact réel. Tu dois cadrer un plan de tracking avec la data team avant que la tech ne commence à coder.",
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
        "situation":  "Tu es PM et tu reçois une question du CFO : \"pourquoi le revenu par client a baissé sur le segment Mid-Market ce trimestre ?\" Tu as accès à l'outil d'analytics et à la base SQL, mais la data team est saturée. Tu dois sortir une réponse étayée en 48h.",
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
        "situation":  "Tu es PM et un analyste te présente un slide : \"70% des utilisateurs n'utilisent pas la feature collaboration\". L'équipe veut la supprimer pour économiser de la dette. Avant de trancher, tu dois interpréter cette donnée correctement et formuler une recommandation au CPO.",
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
        "situation":  "Tu es PM et le CODIR te dit ne pas comprendre les performances du produit malgré tes reportings mensuels. Les chiffres sont là, mais personne n'agit dessus. Tu dois revoir la façon dont la donnée est rendue lisible, exploitable, et appropriée par les non-spécialistes.",
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
        "situation":  "Tu es PM lead sur une organisation produit où les décisions se prennent encore beaucoup à l'intuition ou \"parce que le client l'a demandé\". Tu veux installer un réflexe data dans les arbitrages quotidiens, sans transformer chaque décision en étude de 3 semaines.",
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
        "situation":  "Tu es PM et tu présentes les résultats d'un A/B test au CPO : la variante semble gagnante à +12%. Avant de généraliser, un doute t'effleure sur la fiabilité des logs. Tu dois décider si tu lances le rollout, si tu temporises, et comment expliquer ta position.",
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
        "situation":  "Tu es PM et tu lances une feature de parrainage qui collecte des données personnelles supplémentaires (e-mails de tiers, historique). Le DPO te demande un cadrage clair avant le go. Tu dois définir le cycle de vie de la donnée et coordonner les bons acteurs.",
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
        "situation":  "Tu es PM sur une feature de configuration avancée pour des admins BtoB. Le designer te propose un formulaire de 12 champs sur une seule page. Les utilisateurs tests décrochent. Tu dois challenger la proposition design avec des arguments solides sans empiéter sur le métier du designer.",
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
        "situation":  "Tu es PM face à un problème stratégique mais ambigu : la rétention chute sur les nouveaux clients, et personne ne sait si c'est l'onboarding, le pricing ou la valeur perçue. Tu as une équipe pluri-disciplinaire mobilisable une semaine. Tu dois choisir la bonne approche de conception.",
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
        "situation":  "Tu es PM sur une feature qui nécessite un nouveau type d'affichage de données. Le designer crée un composant ad hoc. Le lead front-end râle car cela diverge du Design System. Tu dois arbitrer entre vélocité de la feature et cohérence long terme du produit.",
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
        "situation":  "Tu es PM et la tech te propose deux solutions pour une nouvelle feature : une rapide qui couple deux services existants, et une plus propre basée sur une architecture événementielle, deux fois plus coûteuse. Tu dois comprendre les implications et trancher avec le tech lead.",
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
        "situation":  "Tu es PM et la vélocité de l'équipe baisse depuis 4 sprints. La tech invoque la dette technique et demande 30% de capacity dédié sur le prochain trimestre. Les sales hurlent car la roadmap glisse. Tu dois trancher et défendre l'arbitrage.",
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
        "situation":  "Tu es PM et le produit subit un pic de trafic inattendu suite à une mention presse, provoquant des lenteurs visibles côté clients. Les DevOps proposent plusieurs options (scaling auto, cache, instances dédiées) avec des coûts très différents. Tu dois participer activement à l'arbitrage.",
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
        "situation":  "Tu es Product Ops dans une scale-up BtoB avec 6 PMs qui travaillent chacun à leur façon : tickets, specs, rituels, vocabulaire. L'onboarding d'un nouveau PM prend 2 mois. Tu dois proposer une standardisation utile sans tuer l'autonomie de chaque squad.",
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
        "situation":  "Tu es Product Ops et tu constates que la doc produit est éparpillée entre Notion, Confluence, Drive et Slack, avec des versions contradictoires. Les équipes perdent un temps fou et prennent des décisions sur des bases obsolètes. Tu dois remettre de l'ordre durablement.",
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
        "situation":  "Tu es Head of Product part-time dans une boîte qui passe de 4 à 10 PMs en un an. Les rôles se chevauchent, les responsabilités sont floues, certains sujets tombent entre deux chaises. Le CEO te demande une nouvelle organisation produit alignée avec la stratégie.",
        "tools":  "conception organisationnelle, RACI / RAPID, OKR, modélisation de compétences, career pathing"
    },
    {
        "id":  "6.2.2",
        "cat":  "6. Product Ops",
        "sub":  "6.2 Organisation",
        "skill":  "6.2.2 Pilotage & Gouvernance",
        "description":  "Mise en place des instances, des indicateurs et des rituels nécessaires pour piloter la performance de l'organisation produit et assurer l'alignement avec la stratégie de l'entreprise et avec les équipes Métiers & Tech.",
        "junior":  "Prépare les supports pour les instances de gouvernance (ex: mise à jour des kpi, préparation d'une démo). participe activement aux rituels de son équipe (daily, weekly, retro) et comprend comment sa squad contribue aux KPI globaux.",
        "senior":  "VConçoit, met en œuvre et anime les instances de gouvernance produit (comités, rituels) pour assurer la bonne circulation de l'information et l'alignement stratégique. il définit les KPI pertinents pour mesurer la performance de l'organisation et construit les tableaux de bord associés.",
        "situation":  "Tu es Head of Product en mission et la direction te reproche un manque de visibilité sur ce que font les équipes produit. Les PMs, eux, se plaignent d'être trop sollicités pour des points de reporting. Tu dois installer un pilotage qui serve les deux côtés sans alourdir.",
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
        "situation":  "Tu es PM et tu dois lancer un projet stratégique impliquant 15 personnes de 5 équipes différentes (produit, tech, design, marketing, ventes). Tu disposes d'une journée de kick-off pour aligner tout le monde sur la vision, les risques et la suite. Tu prépares l'atelier.",
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
        "situation":  "Tu es PM senior et un PM junior de ton équipe te sollicite, bloqué sur une priorisation qu'il doit présenter à son stakeholder dans 3 jours. Il te demande \"ce que tu ferais à sa place\". Tu dois l'aider sans faire le travail à sa place ni le laisser s'enliser.",
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
        "situation":  "Tu es PM sur un produit de remontée d'insights. Le CEO veut \"un moteur de recherche intelligent sur la doc interne\" et la tech hésite entre fine-tuner un modèle, brancher un RAG, ou utiliser un assistant générique. Tu dois cadrer la bonne approche et la défendre en comité technique.",
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
        "situation":  "Tu es PM sur une feature IA générative déjà en production. La facture API a triplé en 3 mois et le CFO te demande un plan de réduction des coûts sans dégrader la qualité perçue. Tu dois analyser les leviers (modèle, prompt, cache, segmentation des cas) et proposer un arbitrage.",
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
        "situation":  "Tu es PM sur un agent IA de support client. En tests internes, l'agent sort parfois du ton de marque, donne des informations approximatives, ou se laisse manipuler par des questions pièges. Tu dois travailler le system prompt avec l'équipe avant le lancement prévu dans 3 semaines.",
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
        "situation":  "Tu es PM sur un produit avec une équipe Support de 40 personnes qui croule sous les tickets. Le COO te pousse à \"mettre de l'IA là-dedans\" et la tech a déjà prototypé trois pistes (classification, résumé, réponse auto). Tu dois prioriser et défendre un choix au prochain comité.",
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
        "situation":  "Tu es PM sur une feature de recommandation IA dont le lancement approche. Le CEO veut des KPIs au board. La data science propose de suivre l'accuracy du modèle, mais cela ne parlera à personne. Tu dois construire un cadre de mesure qui relie performance modèle et impact business.",
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
        "situation":  "Tu es PM sur un projet de classification automatique de documents B2B. La data team réclame un jeu de données labellisé de qualité, mais les experts métiers sont peu disponibles et l'annotation externe risque d'introduire des biais. Tu dois cadrer un processus d'annotation fiable et soutenable.",
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
        "situation":  "Tu es PM sur un détecteur de fraude IA en production depuis 6 mois. Les fausses alertes augmentent et un client important s'en plaint formellement. La data science propose plusieurs ajustements. Tu dois arbitrer sur les bons trade-offs métier et installer un monitoring durable.",
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
        "situation":  "Tu es PM sur une feature de recommandation IA dans un produit SaaS BtoB. Les premiers tests utilisateurs montrent une défiance : les gens ne comprennent pas pourquoi tel résultat sort, et n'osent pas l'utiliser pour des décisions importantes. Tu dois repenser l'expérience avec le designer.",
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
        "situation":  "Tu es PM sur un assistant conversationnel destiné à aider les équipes commerciales en pleine action. Les tests montrent que l'agent perd le fil au bout de 4-5 échanges, et que les utilisateurs se sentent incompris. Tu dois retravailler le design conversationnel avec l'équipe.",
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
        "situation":  "Tu es PM sur un modèle de scoring qui aide les RH à pré-trier des candidatures. Avant le lancement, le DPO et le legal te remontent des risques de biais et de non-conformité à l'AI Act. Tu dois sécuriser la feature et démontrer la rigueur de ta démarche au CODIR.",
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
        "situation":  "Tu es PM et tu veux valider en une semaine l'intérêt d'un agent IA \"FAQ interne\" pour les équipes RH, avant d'embarquer la tech sur un vrai projet. Tu n'as pas de ressource dev disponible mais tu as accès à plusieurs plateformes no-code et low-code. Tu construis le prototype toi-même.",
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
        "situation":  "Tu es PM sur un outil d'aide à la vente. Tu veux qu'à partir d'un e-mail client, le produit génère un devis personnalisé en interrogeant le catalogue interne et l'historique du compte. Tu dois concevoir avec la tech l'architecture agentique adaptée, sans hallucinations critiques.",
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

