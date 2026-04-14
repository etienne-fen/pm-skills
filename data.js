// data.js
const skillsData = [
     {
        id: "0.1.1",
        cat: "0. Leadership & Influence",
        sub: "0.1 Communication & Influence",
        skill: "0.1.1 Communication Stratégique & Storytelling",
        tools: "Golden Circle (Why, How, What), Méthode STAR",
        junior: "Communique de manière claire et concise au sein de son équipe et avec ses interlocuteurs directs. Sait présenter l'avancement de son périmètre.",
        senior: "Maîtrise l'art du storytelling. Adapte son discours à son audience (C-level, développeurs, clients) pour inspirer, persuader et créer un alignement autour de la vision et de la stratégie.",
        situation: "Face au comité de direction, le senior ne liste pas les fonctionnalités à venir. Il raconte l'histoire de l'utilisateur, explique son problème, et positionne la roadmap comme la solution narrative à ce problème, créant ainsi l'adhésion émotionnelle et rationnelle."
    },
    {
        id: "0.1.2",
        cat: "0. Leadership & Influence",
        sub: "0.1 Communication & Influence",
        skill: "0.1.2 Influence & Négociation",
        tools: "Matrice Pouvoir/Intérêt, Négociation Raisonnée (Getting to Yes), Matrice RACI",
        junior: "Sait argumenter pour défendre une priorité au sein de son équipe ou obtenir de l'aide d'une équipe adjacente.",
        senior: "Négocie et obtient l'adhésion de parties prenantes complexes, même sans autorité hiérarchique. Sait dire \"non\" de manière constructive en expliquant les arbitrages et en préservant la relation.",
        situation: "Un directeur commercial demande une fonctionnalité spécifique pour un client clé. Le senior, au lieu d'accepter ou de refuser, organise un atelier avec lui, lui présente les coûts d'opportunité et négocie une solution alternative qui répond à 80% du besoin sans dévier de la stratégie."
    },
    {
        id: "0.2.1",
        cat: "0. Leadership & Influence",
        sub: "0.2 Collaboration & Développement Humain",
        skill: "0.2.1 Facilitation & Animation d'Ateliers",
        tools: "Animation d'ateliers (définir lesquels)",
        junior: "Participe activement aux ateliers et peut co-animer un rituel simple (ex: rétrospective).",
        senior: "Conçoit et facilite des ateliers complexes (ex: cadrage stratégique, idéation, User Story Mapping) avec des groupes multidisciplinaires et des participants de haut niveau, en s'assurant que l'objectif est atteint.",
        situation: "Pour lancer un nouveau projet d'envergure, le senior conçoit et anime un kick-off de 2 jours avec 15 personnes (produit, tech, design, marketing, ventes) pour créer une vision partagée, identifier les risques et définir la feuille de route initiale."
    },
    {
        id: "0.2.2",
        cat: "0. Leadership & Influence",
        sub: "0.2 Collaboration & Développement Humain",
        skill: "0.2.2 Coaching & Mentorat",
        tools: "GROW Model, Feedback Constructif (DESC), Communautés de Pratique",
        junior: "Se concentre sur son propre développement. Partage ses connaissances de manière informelle avec ses pairs.",
        senior: "Agit comme un coach pour l'équipe (en aidant les développeurs à mieux comprendre le \"pourquoi\") et comme un mentor pour les PMs plus juniors. Contribue activement à la montée en compétence de l'organisation produit.",
        situation: "Le senior ne donne pas la solution à un PM junior bloqué sur une priorisation. Il lui pose des questions basées sur le modèle GROW (Goal, Reality, Options, Will) pour l'aider à structurer sa pensée et à trouver la solution par lui-même."
    },
    {
        id: "1.1.1",
        cat: "1. Stratégie & Vision Produit",
        sub: "1.1 Élaboration de la Stratégie",
        skill: "1.1.1 Analyse du Marché & Concurrence",
        tools: "SWOT, PESTEL, Forces de Porter, Wardley Maps.",
        junior: "Effectue une veille sur des concurrents directs et des fonctionnalités spécifiques à la demande de son manager.",
        senior: "Mène une analyse continue et pro-active du marché (tendances macro, technologies émergentes, mouvements concurrentiels) pour identifier des opportunités de rupture et des menaces stratégiques.",
        situation: "Le senior identifie une nouvelle technologie (ex: LLM open-source performant) comme une menace potentielle pour la position de leader, poussant à la création d'une nouvelle initiative R&D."
    },
    {
        id: "1.1.2",
        cat: "1. Stratégie & Vision Produit",
        sub: "1.1 Élaboration de la Stratégie",
        skill: "1.1.2 Vision Produit",
        tools: "V2MOM, Golden Circle, Product Vision Board.",
        junior: "Comprend, articule et peut expliquer la vision du produit à son équipe.",
        senior: "Définit, possède et évangélise une vision produit inspirante sur 3-5 ans. Il s'assure qu'elle est comprise, partagée et qu'elle guide les décisions à tous les niveaux de l'entreprise.",
        situation: "Lors d'une réunion \"all-hands\", le senior présente la vision avec un storytelling impactant, donnant un sens et une direction clairs à tous les employés."
    },
    {
        id: "1.1.3",
        cat: "1. Stratégie & Vision Produit",
        sub: "1.1 Élaboration de la Stratégie",
        skill: "1.1.3 Business & Modèle Éco.",
        tools: "Business Model Canvas, Lean Canvas, Analyse de la chaîne de valeur.",
        junior: "Comprend le modèle économique du produit et l'impact de son périmètre sur les KPIs principaux (ex: revenus, acquisition).",
        senior: "Construit, modélise et optimise le modèle économique. Prend des décisions stratégiques (pricing, nouveaux marchés) en se basant sur une analyse financière approfondie (P&L, CAC, LTV).",
        situation: "Le senior décide de pivoter d'un modèle de licence unique vers un abonnement (SaaS) en modélisant l'impact sur les revenus récurrents (MRR) et la valorisation de l'entreprise."
    },
    {
        id: "1.2.1",
        cat: "1. Stratégie & Vision Produit",
        sub: "1.2 Communication & Alignement de la Stratégie",
        skill: "1.2.1 Construction & Gestion de Roadmap",
        tools: "Now-Next-Later Roadmap, Roadmap Thématique, OKRs",
        junior: "Contribue à la roadmap de son équipe en fournissant des estimations pour son périmètre.",
        senior: "Construit et maintient une roadmap stratégique basée sur les \"outcomes\" (résultats) et non les \"outputs\" (fonctionnalités). La présente et la défend au niveau exécutif.",
        situation: "Le senior présente au comité de direction une roadmap axée sur des objectifs comme \"Augmenter la rétention de 15%\" plutôt qu'une liste de fonctionnalités, justifiant chaque initiative par son impact attendu."
    },
    {
        id: "1.2.2",
        cat: "1. Stratégie & Vision Produit",
        sub: "1.2 Communication & Alignement de la Stratégie",
        skill: "1.2.2 Alignement des Parties Prenantes",
        tools: "Matrice RACI, Matrice Pouvoir/Intérêt.",
        junior: "Identifie et communique régulièrement avec les parties prenantes directes de son équipe (support, marketing).",
        senior: "Cartographie l'ensemble des parties prenantes (y compris C-level, juridique, ventes), comprend leurs enjeux et met en place une communication pro-active et adaptée pour obtenir leur adhésion et leur soutien.",
        situation: "Avant de lancer un projet impactant l'équipe commerciale, le senior organise des ateliers avec leurs directeurs pour co-construire la solution et s'assurer qu'elle répond à leurs contraintes terrain."
    },
    {
        id: "2.1.1",
        cat: "2. Découverte (Discovery)",
        sub: "2.1 Recherche & Génération d'Insights",
        skill: "2.1.1 Recherche Utilisateur Qualitative",
        tools: "Personas, JTBD, User Story Mapping, Interviews.",
        junior: "Mène des entretiens utilisateurs et des tests d'utilisabilité en utilisant des scripts préparés.",
        senior: "Définit la stratégie de recherche. Mène des entretiens complexes (ex: ethnographiques) pour découvrir des besoins latents et non exprimés.",
        situation: "Le senior, en observant un utilisateur sur son lieu de travail, découvre un \"hack\" que celui-ci a mis en place, révélant un besoin profond que des entretiens classiques n'avaient pas fait émerger."
    },
    {
        id: "2.1.2",
        cat: "2. Découverte (Discovery)",
        sub: "2.1 Recherche & Génération d'Insights",
        skill: "2.1.2 Analyse de Données Quantitatives",
        tools: "AARRR, HEART Framework, Analyse de cohortes.",
        junior: "Sait utiliser les outils d'analyse (Mixpanel, GA) pour créer des dashboards et suivre l'adoption.",
        senior: "Définit le plan de tracking. Maîtrise l'analyse de cohortes et sait croiser données quanti/quali pour formuler des hypothèses.",
        situation: "Le senior remarque une chute dans le funnel de conversion. Il demande au junior de mener des entretiens ciblés sur les utilisateurs qui abandonnent pour comprendre le \"pourquoi\"."
    },
    {
        id: "2.2.1",
        cat: "2. Découverte (Discovery)",
        sub: "2.2 Synthèse & Expérimentation",
        skill: "2.2.1 Définition du Problème & Idéation",
        tools: "Opportunity Solution Tree, How Might We, 5 Pourquoi.",
        junior: "Participe à des ateliers de brainstorming. Sait formuler un problème utilisateur clairement.",
        senior: "Facilite des ateliers de créativité. Maîtrise l'art de reformuler un problème pour ouvrir le champ des possibles.",
        situation: "Face à une demande pour un bouton d'export Excel, le senior utilise les 5 Pourquoi pour comprendre que le besoin est de partager la performance, ouvrant d'autres solutions plus pertinentes."
    },
    {
        id: "2.2.2",
        cat: "2. Découverte (Discovery)",
        sub: "2.2 Synthèse & Expérimentation",
        skill: "2.2.2 Expérimentation & Validation",
        tools: "Lean Startup, A/B Testing, Fake Door Test.",
        junior: "Met en place et mesure des A/B tests simples pour optimiser un élément.",
        senior: "Conçoit une stratégie d'expérimentation pour dé-risquer les 4 grands risques (valeur, utilisabilité, faisabilité, viabilité).",
        situation: "Pour valider l'appétence pour une fonctionnalité complexe d'IA, le senior met en place une \"fausse porte\" pour valider l'intérêt avant d'écrire une seule ligne de code."
    },
    {
        id: "3.1.1",
        cat: "3. Conception & Livraison (Delivery)",
        sub: "3.1 Planification & Priorisation",
        skill: "3.1.1 Gestion de Backlog & Spécifications",
        tools: "User Story, INVEST, Gherkin.",
        junior: "Rédige des User Stories claires avec des critères d'acceptation précis. Maintient le backlog propre.",
        senior: "Gère un backlog comme un outil de communication stratégique. Excelle dans le découpage en tranches de valeur livrables.",
        situation: "Le senior transforme une demande épique floue en une série de petits incréments testables qui apportent de la valeur dès la première semaine de développement."
    },
    {
        id: "3.1.2",
        cat: "3. Conception & Livraison (Delivery)",
        sub: "3.1 Planification & Priorisation",
        skill: "3.1.2 Priorisation",
        tools: "RICE, ICE, MoSCoW, Modèle de Kano",
        junior: "Priorise le travail de son équipe au niveau du sprint.",
        senior: "Maîtrise plusieurs frameworks de priorisation. Communique et défend ses choix de manière transparente et rationnelle.",
        situation: "Le senior utilise le framework RICE pour arbitrer entre une initiative stratégique complexe et une série de petites améliorations rapides très demandées."
    },
    {
        id: "3.2.1",
        cat: "3. Conception & Livraison (Delivery)",
        sub: "3.2 Exécution & Lancement",
        skill: "3.2.1 Animation d'équipe & Rituels Agiles",
        tools: "Scrum, Kanban, SAFE",
        junior: "Participe activement aux rituels de son équipe (daily, planning, retro).",
        senior: "Facilite les rituels et les rend plus efficaces. Agit comme un \"bouclier\" pour l'équipe en la protégeant des interruptions.",
        situation: "Le senior recadre les dailies qui s'éternisent pour qu'ils soient focalisés sur les blocages et non sur un rapport d'activité."
    },
    {
        id: "3.2.2",
        cat: "3. Conception & Livraison (Delivery)",
        sub: "3.2 Exécution & Lancement",
        skill: "3.2.2 Stratégie de Qualité & Tests (QA)",
        tools: "Test Pyramid, UAT, Bug Triage",
        junior: "Participe aux phases de test. Effectue les tests d'acceptation utilisateur (UAT).",
        senior: "Définit la stratégie de qualité globale. Arbitre sur la criticité des bugs en fonction de l'expérience utilisateur.",
        situation: "Un bug est découvert avant la prod. Le senior analyse l'impact réel et décide soit de retarder le lancement, soit de lancer et corriger via un hotfix."
    },
    {
        id: "3.2.3",
        cat: "3. Conception & Livraison (Delivery)",
        sub: "3.2 Exécution & Lancement",
        skill: "3.2.3 Stratégie de Lancement (Go-to-Market)",
        tools: "Feature Flags, Beta Programs, A/B Testing.",
        junior: "Coordonne les lancements (notes de version, formation du support).",
        senior: "Définit la stratégie de lancement complète : segmentation, communication, déploiement progressif.",
        situation: "Pour un changement d'interface majeur, le senior déploie progressivement (1%, 10%, 50%) tout en monitorant les KPIs pour réagir rapidement."
    },
    {
        id: "4.1.1",
        cat: "4. Data Culture",
        sub: "4.1 Définition de la Stratégie de Mesure",
        skill: "4.1.1 Définition des KPIs & North Star Metric",
        tools: "North Star Metric Framework, OKRs.",
        junior: "Comprend et suit les KPIs définis pour son produit.",
        senior: "Définit la \"North Star Metric\" du produit et la décline en un arbre de métriques actionnables.",
        situation: "L'entreprise veut augmenter les revenus. Le senior définit la NSM comme le nombre d'équipes collaborant, car c'est le levier de rétention long terme."
    },
    {
        id: "4.1.2",
        cat: "4. Data Culture",
        sub: "4.1 Définition de la Stratégie de Mesure",
        skill: "4.1.2 Conception du Plan de Tracking",
        tools: "Taxonomie d'événements, Data Dictionary",
        junior: "Rédige des spécifications de tracking pour les nouvelles fonctionnalités.",
        senior: "Conçoit le plan de tracking complet du produit. Définit une taxonomie claire et pérenne.",
        situation: "Avant une refonte, le senior conçoit un plan qui mesurera l'adoption par segment et l'impact sur la rétention à 30 jours."
    },
    {
        id: "4.2.1",
        cat: "4. Data Culture",
        sub: "4.2 Analyse & Interprétation",
        skill: "4.2.1 Maîtrise des Outils d'Analyse",
        tools: "SQL, Mixpanel, Amplitude, Tableau, Looker",
        junior: "Maîtrise les outils d'analyse produit pour construire des dashboards et funnels simples.",
        senior: "Sait écrire des requêtes SQL pour explorer la donnée brute et collabore sur des analyses statistiques complexes.",
        situation: "Le junior constate une baisse. Le senior écrit un SQL pour isoler les users et découvre qu'ils sont tous sur une ancienne version de l'app."
    },
    {
        id: "4.2.2",
        cat: "4. Data Culture",
        sub: "4.2 Analyse & Interprétation",
        skill: "4.2.2 Transformation de la Donnée en Insight",
        tools: "Storytelling par la donnée, Analyse de cohortes.",
        junior: "Répond à des questions factuelles avec la donnée.",
        senior: "Raconte une histoire avec la donnée, identifie des tendances de fond et transforme l'analyse en recommandation stratégique.",
        situation: "Le junior note que 70% n'utilisent pas la feature X. Le senior montre que ceux qui l'utilisent ont une rétention 3x supérieure, créant une opportunité."
    },
    {
        id: "4.3.1",
        cat: "4. Data Culture",
        sub: "4.3 Communication & Culture",
        skill: "4.3.1 Visualisation & Communication",
        tools: "BI Tools, Data Viz",
        junior: "Sait créer des graphiques clairs et lisibles pour présenter des résultats.",
        senior: "Maîtrise l'art de la visualisation. Conçoit des dashboards interactifs pour le management.",
        situation: "Le senior conçoit un dashboard qui permet au management de filtrer par segment pour explorer les données par eux-mêmes."
    },
    {
        id: "4.3.2",
        cat: "4. Data Culture",
        sub: "4.3 Communication & Culture",
        skill: "4.3.2 Instaurer une Culture Data-Informed",
        tools: "Rituels de revue de métriques",
        junior: "Utilise la donnée dans ses spécifications pour justifier ses choix.",
        senior: "Évangélise l'utilisation de la donnée à tous les niveaux. Met en place des rituels partagés.",
        situation: "Le senior instaure une revue de métriques hebdomadaire où l'équipe analyse ensemble les performances passées."
    },
    {
        id: "5.1.1",
        cat: "5. Socle Tech & Design",
        sub: "5.1 Maîtrise du Design",
        skill: "5.1.1 Principes d'Ergonomie & Design d'Interaction",
        tools: "Heuristiques de Nielsen, Lois UX, Gestalt.",
        junior: "Comprend et sait appliquer les heuristiques d'ergonomie pour donner un feedback sur des maquettes.",
        senior: "Maîtrise les patterns complexes. Sait challenger le designer pour pousser la simplicité au maximum.",
        situation: "Face à un formulaire complexe, le senior propose de le scinder en plusieurs étapes via le principe de divulgation progressive."
    },
    {
        id: "5.1.2",
        cat: "5. Socle Tech & Design",
        sub: "5.1 Maîtrise des principes de Product Design",
        skill: "5.1.2 Compréhension du Processus de Design",
        tools: "Design Thinking, Double Diamant, Design Sprints",
        junior: "Comprend les différentes phases du processus (recherche, idéation, tests).",
        senior: "Collabore pour définir la stratégie de design. Sait quand utiliser un Design Sprint ou un prototype basse fidélité.",
        situation: "Face à un problème ambigu, le senior lance un Design Sprint d'une semaine avec les parties prenantes plutôt que de lancer des maquettes directes."
    },
    {
        id: "5.1.3",
        cat: "5. Socle Tech & Design",
        sub: "5.1 Maîtrise des principes de Product Design",
        skill: "5.1.3 Culture du Design System",
        tools: "Atomic Design, Design Tokens.",
        junior: "Utilise les composants du Design System existant dans ses spécifications.",
        senior: "Agit comme sponsor du Design System. Arbitre entre création de nouveau composant et réutilisation.",
        situation: "L'équipe demande un nouveau graphique. Le senior vérifie si le besoin est unique ou s'il justifie un nouvel atome réutilisable dans le système."
    },
    {
        id: "5.2.1",
        cat: "5. Socle Tech & Design",
        sub: "5.2 Maîtrise des principes d'Ingénierie",
        skill: "5.2.1 Compréhension de l'Architecture Logicielle",
        tools: "CAP Theorem, API Gateway, Microservices.",
        junior: "Comprend l'architecture de base (front, back, API, DB).",
        senior: "A une compréhension stratégique des choix d'architecture et de leurs impacts sur la performance et le coût.",
        situation: "Le senior challenge une solution qui créerait un couplage fort, proposant une architecture par événements pour la scalabilité future."
    },
    {
        id: "5.2.2",
        cat: "5. Socle Tech & Design",
        sub: "5.2 Maîtrise des principes d'Ingénierie",
        skill: "5.2.2 Compréhension du Cycle de Développement",
        tools: "CI/CD, Test Pyramid, Git.",
        junior: "Comprend ce qu'est une Pull Request et le versionnement.",
        senior: "Comprend les enjeux de CI/CD et la dette technique. Sait négocier du temps pour le refactoring.",
        situation: "Le senior justifie auprès de la direction la nécessité de dédier 20% du trimestre à la réduction de la dette pour accélérer le futur."
    },
    {
        id: "6.1.1",
        cat: "6. Product Ops",
        sub: "6.1 Processus & Outils",
        skill: "6.1.1 Standardisation des Processus",
        tools: "Playbooks, Templates.",
        junior: "Applique les processus et outils définis (templates de specs, process de release).",
        senior: "Conçoit, déploie et améliore les processus de l'organisation pour garantir l'efficacité à l'échelle.",
        situation: "Le senior met en place un Product Playbook centralisé pour accélérer l'onboarding des nouveaux PMs."
    },
    {
        id: "6.2.1",
        cat: "6. Product Ops",
        sub: "6.2 Communication & Gouvernance",
        skill: "6.2.1 Gouvernance de la Donnée Produit",
        tools: "Data Dictionary",
        junior: "S'assure que les données de son périmètre sont fiables.",
        senior: "Met en place une gouvernance pour que tout le monde s'appuie sur une source de vérité unique.",
        situation: "Le senior lance un projet de standardisation du nommage des événements de tracking pour toutes les équipes."
    },
    {
        id: "6.2.2",
        cat: "6. Product Ops",
        sub: "6.2 Communication & Gouvernance",
        skill: "6.2.2 Communication & Rituels d'Équipe",
        tools: "Monthly Demos, Strategy Reviews.",
        junior: "Prépare et partage les notes de version pour ses fonctionnalités.",
        senior: "Anime les rituels de communication de l'organisation pour assurer l'alignement entre les équipes.",
        situation: "Le senior instaure une Revue Produit mensuelle où chaque équipe présente ses apprentissages (succès et échecs)."
    },
    {
        id: "7.1.1",
        cat: "7. AI Product Builder",
        sub: "7.1 Stratégie IA",
        skill: "7.1.1 Compréhension Fondamentale de l'IA",
        tools: "Machine Learning Canvas, LLM.",
        junior: "Comprend les concepts de base (Supervisé, Modèle, API).",
        senior: "Évalue les compromis entre modèle sur étagère, fine-tuning ou construction sur mesure.",
        situation: "Le senior oriente l'équipe vers le fine-tuning d'un modèle open-source hébergé en interne pour des raisons de coût et de sécurité."
    },
    {
        id: "7.1.2",
        cat: "7. AI Product Builder",
        sub: "7.1 Stratégie IA",
        skill: "7.1.2 Identification de Cas d'Usage IA",
        tools: "AI Value Proposition Canvas.",
        junior: "Identifie des opportunités simples d'automatisation.",
        senior: "Identifie des problèmes complexes ne pouvant être résolus que par l'IA. Pense AI-first.",
        situation: "Le senior imagine un Agent Copilot qui écoute le support client en temps réel pour suggérer des réponses au conseiller."
    },
    {
        id: "7.1.3",
        cat: "7. AI Product Builder",
        sub: "7.1 Stratégie IA",
        skill: "7.1.3 Stratégie de Données pour l'IA",
        tools: "Data Flywheel, Feedback Loops.",
        junior: "Participe à la définition des données nécessaires pour un projet simple.",
        senior: "Définit la stratégie d'acquisition comme un avantage concurrentiel (data moat). Met en place des boucles de rétroaction.",
        situation: "Le senior conçoit une feature qui incite l'utilisateur à donner un feedback, lequel est utilisé pour ré-entraîner le modèle."
    },
    {
        id: "7.2.1",
        cat: "7. AI Product Builder",
        sub: "7.2 MLOps",
        skill: "7.2.1 Annotation & Préparation des Données",
        tools: "Labelbox, Scale AI.",
        junior: "Participe à des tâches de labellisation.",
        senior: "Conçoit et supervise la stratégie d'annotation et le contrôle qualité.",
        situation: "Le senior met en place un processus d'annotation externe suivi d'une validation par des experts internes."
    },
    {
        id: "7.2.2",
        cat: "7. AI Product Builder",
        sub: "7.2 MLOps",
        skill: "7.2.2 Entraînement & Évaluation du Modèle",
        tools: "Confusion Matrix, ROC Curve.",
        junior: "Comprend les métriques de base (Précision, Rappel).",
        senior: "Définit les métriques d'évaluation liées à l'impact business et challenge les Data Scientists.",
        situation: "Le senior demande d'optimiser le rappel sur un segment d'utilisateurs crucial où le modèle était défaillant."
    },
    {
        id: "7.2.3",
        cat: "7. AI Product Builder",
        sub: "7.2 MLOps",
        skill: "7.2.3 Déploiement & Monitoring en Production",
        tools: "MLflow, Model Drift monitoring.",
        junior: "Coordonne le déploiement d'une nouvelle version du modèle.",
        senior: "Met en place un monitoring pour détecter les dérives du modèle (model drift) et planifie les ré-entraînements.",
        situation: "Le senior crée un dashboard qui alerte si la distribution des données de prod s'éloigne de celle de l'entraînement."
    },
    {
        id: "7.3.1",
        cat: "7. AI Product Builder",
        sub: "7.3 Expérience & Éthique",
        skill: "7.3.1 Design d'Interaction pour l'IA",
        tools: "Explainable AI (XAI), Human-in-the-loop.",
        junior: "Participe à la conception d'interfaces claires pour l'IA.",
        senior: "Maîtrise comment gérer l'incertitude et expliquer les décisions du modèle à l'utilisateur.",
        situation: "Le senior conçoit une interface qui explique pourquoi un produit est recommandé (\"Parce que vous avez aimé X\")."
    },
    {
        id: "7.3.2",
        cat: "7. AI Product Builder",
        sub: "7.3 Expérience & Éthique",
        skill: "7.3.2 Éthique & IA Responsable",
        tools: "Fairness checklists.",
        junior: "Est sensibilisé aux biais potentiels dans les données.",
        senior: "Intègre l'éthique au cœur du processus. Mène des analyses de risques Red Team.",
        situation: "Avant de lancer un scoring de CV, le senior organise un atelier pour identifier et empêcher les biais de discrimination."
    }

];

const profileRules = [
    { cat: "0. Leadership", title: "Le Leader Inspirant", desc: "Vous excellez dans l'humain et la négociation. Votre force est d'aligner les équipes sans autorité hiérarchique.", mission: "Gérer une équipe de PMs ou transformer la culture produit d'une entreprise." },
    { cat: "1. Stratégie", title: "Le Stratège Visionnaire", desc: "Le long-terme est votre terrain de jeu. Vous savez transformer des tendances en roadmap concrète.", mission: "Lancement d'une nouvelle ligne de business stratégique." },
    { cat: "2. Discovery", title: "L'Explorateur d'Insights", desc: "Vous ne jurez que par l'utilisateur. Votre obsession est de dé-risquer avant de construire.", mission: "Mener la phase de discovery d'un produit complexe partant de zéro." },
    { cat: "3. Delivery", title: "Le Maître de l'Exécution", desc: "Rien ne sort sans votre validation. Vous transformez le chaos en une machine de livraison fluide.", mission: "Optimisation de la vélocité et de la qualité d'une équipe technique." },
    { cat: "4. Data Culture", title: "Le Data Thinker", desc: "Les chiffres parlent pour vous. Votre approche est purement rationnelle et basée sur l'évidence.", mission: "Mise en place d'une infrastructure de tracking et culture de l'expérimentation." },
    { cat: "5. Socle Tech & Design", title: "Le Product Architect", desc: "Vous parlez couramment le 'Dev' et le 'Design'. Vous faites le pont entre faisabilité et esthétique.", mission: "Refonte d'un Design System ou d'une architecture monolithique." },
    { cat: "6. Product Ops", title: "L'Organisateur d'Échelle", desc: "Votre passion est l'efficacité. Vous construisez les outils qui permettent aux autres de briller.", mission: "Scaling d'une orga produit de 5 à 50 PMs." },
    { cat: "7. AI Product Builder", title: "L'AI Architect", desc: "L'IA est pour vous un levier concret. Vous savez où elle apporte de la valeur réelle.", mission: "Intégration de modèles prédictifs ou LLM dans un produit métier." }
];
