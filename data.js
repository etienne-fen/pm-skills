// data.js

// ===== SKILL EXPLORER DATA =====
// All available skills for the explorer view
const explorerData = [
  {
    "id": "0.1.1",
    "cat": "0. Leadership & Influence",
    "sub": "0.1 Communication & Influence",
    "skill": "0.1.1 Communication Stratégique & Storytelling",
    "description": "Capacité à structurer et transmettre des messages complexes de manière persuasive et mémorable pour aligner les parties prenantes sur une vision commune.",
    "tools": "Google Slides, PPT, Miro, FigJam, Loom",
    "junior": "Communique de manière claire et concise au sein de son équipe et avec ses interlocuteurs directs. Sait présenter l'avancement de son périmètre de manière factuelle.",
    "senior": "Maîtrise l'art du storytelling. Adapte son discours à son audience (C-level, développeurs, clients) pour inspirer, persuader et créer un alignement.",
    "situation": "Face au comité de direction, le senior ne liste pas les fonctionnalités à venir. Il raconte l'histoire de l'utilisateur, explique son problème, et positionne la roadmap comme la solution narrative à ce problème, créant ainsi l'adhésion émotionnelle et rationnelle."
  },
  {
    "id": "0.1.2",
    "cat": "0. Leadership & Influence",
    "sub": "0.1 Communication & Influence",
    "skill": "0.1.2 Influence & Négociation",
    "description": "Aptitude à convaincre et à obtenir un consensus sans lien hiérarchique, tout en gérant les conflits d'intérêts entre les différentes parties prenantes.",
    "tools": "Miro, FigJam",
    "junior": "Sait argumenter pour défendre une priorité au sein de son équipe ou obtenir de l'aide d'une équipe adjacente.",
    "senior": "Négocie et obtient l'adhésion de parties prenantes sans autorité hiérarchique. Construit des alliances pour porter des initiatives stratégiques. Sait dire \"non\" de manière constructive en préservant la relation.",
    "situation": "Un directeur commercial demande une fonctionnalité spécifique pour un client clé. Le senior, au lieu d'accepter ou de refuser, organise un atelier avec lui, lui présente les coûts d'opportunité et négocie une solution alternative qui répond à 80% du besoin sans dévier de la stratégie."
  },
  {
    "id": "0.2.1",
    "cat": "0. Leadership & Influence",
    "sub": "0.2 Collaboration & Développement Humain",
    "skill": "0.2.1 Facilitation & Animation d'Ateliers",
    "description": "Maîtrise des techniques de dynamique de groupe pour guider une équipe multidisciplinaire vers un objectif de décision, d'idéation ou de résolution de problèmes.",
    "tools": "Miro, FigJam, Klaxoon",
    "junior": "Participe activement aux ateliers et peut co-animer des ateliers simples (ex: rétrospective).",
    "senior": "Conçoit et facilite des ateliers complexes (ex: cadrage stratégique, idéation) avec des groupes multidisciplinaires et des participants de haut niveau, en s'assurant que l'objectif est atteint.",
    "situation": "Pour lancer un nouveau projet d'envergure, le senior conçoit et anime un kick-off de 2 jours avec 15 personnes (produit, tech, design, marketing, ventes) pour créer une vision partagée, identifier les risques et définir la feuille de route initiale."
  },
  {
    "id": "0.2.2",
    "cat": "0. Leadership & Influence",
    "sub": "0.2 Collaboration & Développement Humain",
    "skill": "0.2.2 Coaching & Mentorat",
    "description": "Action d'accompagner les membres de l'équipe ou des pairs dans leur développement professionnel et la montée en compétences de l'organisation.",
    "tools": "Guildes, 1:to:1",
    "junior": "Se concentre sur son propre développement. Partage ses connaissances de manière informelle avec ses pairs. Donne des feedbacks constructifs à ses pairs.",
    "senior": "Agit comme un coach pour l'équipe et comme un mentor pour les PMs plus juniors. Contribue activement à la montée en compétence de l'organisation produit.",
    "situation": "Le senior ne donne pas la solution à un PM junior bloqué sur une priorisation. Il lui pose des questions basées sur le modèle GROW (Goal, Reality, Options, Will) pour l'aider à structurer sa pensée et à trouver la solution par lui-même."
  },
  {
    "id": "1.1.1",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.1 Élaboration de la Stratégie",
    "skill": "1.1.1 Analyse du Marché & Concurrence",
    "description": "Veille active et analyse critique des tendances sectorielles et des mouvements des concurrents pour identifier des opportunités de différenciation.",
    "tools": "Perplexity, SimilarWeb, SEMrush, Gartner, Forrester",
    "junior": "Effectue une veille sur des concurrents directs et des fonctionnalités spécifiques à la demande de son manager.",
    "senior": "Mène une analyse continue et pro-active du marché (tendances macro, technologies émergentes, mouvements concurrentiels) pour identifier des opportunités de rupture et des menaces stratégiques.",
    "situation": "Le senior identifie une nouvelle technologie (ex: LLM open-source performant) comme une menace potentielle pour la position de leader, poussant à la création d'une nouvelle initiative R&D."
  },
  {
    "id": "1.1.2",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.1 Élaboration de la Stratégie",
    "skill": "1.1.2 Vision Produit",
    "description": "Définition d'un état futur ambitieux et inspirant pour le produit, servant de boussole à long terme pour toutes les décisions tactiques.",
    "tools": "Roadmunk, Aha!, Confluence, Coda, Notion",
    "junior": "Comprend, articule et peut expliquer la vision du produit à son équipe. S'assure que son backlog est aligné avec la vision",
    "senior": "Définit, possède et évangélise une vision produit inspirante sur 3-5 ans. Il s'assure qu'elle est comprise, partagée et qu'elle guide les décisions à tous les niveaux de l'entreprise.",
    "situation": "Lors d'une réunion \"all-hands\", le senior présente la vision avec un storytelling impactant, donnant un sens et une direction clairs à tous les employés."
  },
  {
    "id": "1.1.3",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.1 Élaboration de la Stratégie",
    "skill": "1.1.3 Business & Modèle Éco.",
    "description": "Compréhension des mécanismes de création de valeur financière et de rentabilité du produit au sein de l'entreprise.",
    "tools": "Excel/Google Sheets, Anaplan",
    "junior": "Comprend le modèle économique du produit et l'impact de son périmètre sur les KPIs principaux (ex: revenus, acquisition). Calcule le ROI de ses fonctionnalités",
    "senior": "Construit, modélise et optimise le modèle économique. Prend des décisions stratégiques (pricing, nouveaux marchés) en se basant sur une analyse financière approfondie (P&L, CAC, LTV).",
    "situation": "Le senior décide de pivoter d'un modèle de licence unique vers un abonnement (SaaS) en modélisant l'impact sur les revenus récurrents (MRR) et la valorisation de l'entreprise."
  },
  {
    "id": "1.2.1",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.2 Communication & Alignement de la Stratégie",
    "skill": "1.2.1 Construction & Gestion de Roadmap",
    "description": "Planification stratégique des étapes de développement du produit visant à maximiser l'impact business et la valeur utilisateur dans le temps.",
    "tools": "Roadmunk, Aha!, Confluence, Coda, Notion, Miro",
    "junior": "Contribue à la roadmap de son équipe en fournissant des estimations pour son périmètre.",
    "senior": "Construit et maintient une roadmap stratégique basée sur les \"outcomes\" (résultats) et non les \"outputs\" (fonctionnalités). La présente et la défend au niveau exécutif.",
    "situation": "Le senior présente au comité de direction une roadmap axée sur des objectifs comme \"Augmenter la rétention de 15%\" plutôt qu'une liste de fonctionnalités, justifiant chaque initiative par son impact attendu."
  },
  {
    "id": "1.2.2",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.2 Communication & Alignement de la Stratégie",
    "skill": "1.2.2 Alignement des Parties Prenantes",
    "description": "Gestion proactive des attentes et des besoins des acteurs internes pour garantir leur soutien et lever les freins à l'exécution de la stratégie.",
    "tools": "Notion, Coda, Loom",
    "junior": "Identifie et communique régulièrement avec les parties prenantes directes de son équipe (support, marketing).",
    "senior": "Cartographie l'ensemble des parties prenantes (y compris C-level, juridique, ventes), comprend leurs enjeux et met en place une communication pro-active et adaptée pour obtenir leur adhésion et leur soutien.",
    "situation": "Avant de lancer un projet impactant l'équipe commerciale, le senior organise des ateliers avec leurs directeurs pour co-construire la solution et s'assurer qu'elle répond à leurs contraintes terrain."
  },
  {
    "id": "1.3.1",
    "cat": "1. Stratégie & Vision Produit",
    "sub": "1.3 Viabilité & Conformité réglementaire",
    "skill": "1.3.1 Culture légale & Conformité",
    "description": "Intégration systématique des contraintes juridiques et réglementaires (RGPD, accessibilité) comme levier de confiance et d'éthique produit.",
    "tools": "Documentation de la CNIL, IAPP, OneTrust, TrustArc",
    "junior": "Connaît les principes de base du RGPD et autres régulations clés. Collabore avec le DPO/Juriste pour assurer la conformité de ses features.",
    "senior": "Anticipe l'impact des futures régulations sur la roadmap. Transforme la conformité (ex: la confidentialité) en un avantage concurrentiel et un argument produit (\"Privacy by Design\")",
    "situation": "Le senior intègre la contrainte légale comme un principe de design dès le début pour créer une solution qui est à la fois conforme et meilleure pour l'utilisateur."
  },
  {
    "id": "2.1.1",
    "cat": "2. Découverte & Validation d'Opportunités (Discovery)",
    "sub": "2.1 Recherche & Génération d'Insights",
    "skill": "2.1.1 Recherche Utilisateur Qualitative",
    "description": "Utilisation de méthodes d'observation et d'interaction directe pour comprendre en profondeur les motivations, les besoins et les frustrations des utilisateurs.",
    "tools": "Hotjar, Screeb, Figma, FigJam",
    "junior": "Mène des entretiens utilisateurs et des tests d'utilisabilité en utilisant des scripts préparés. Sait synthétiser les retours bruts.",
    "senior": "Définit la stratégie de recherche (quelles méthodes, quels segments). Mène des entretiens complexes (ex: ethnographiques) pour découvrir des besoins latents et non exprimés.",
    "situation": "Le senior, en observant un utilisateur sur son lieu de travail, découvre un \"hack\" que celui-ci a mis en place, révélant un besoin profond que des entretiens classiques n'avaient pas fait émerger."
  },
  {
    "id": "2.1.2",
    "cat": "2. Découverte & Validation d'Opportunités (Discovery)",
    "sub": "2.1 Recherche & Génération d'Insights",
    "skill": "2.1.2 Analyse de Données Quantitatives",
    "description": "Exploitation statistique des données d'usage pour identifier des tendances de comportement à grande échelle et valider des hypothèses.",
    "tools": "Amplitude, Content Square, GA4, Mixpanel",
    "junior": "Sait utiliser les outils d'analyse pour créer des dashboards et suivre l'adoption de ses fonctionnalités.",
    "senior": "Définit le plan de tracking du produit. Maîtrise l'analyse de cohortes, les funnels de conversion et sait croiser données quanti/quali pour formuler des hypothèses stratégiques.",
    "situation": "Le senior remarque une chute dans le funnel à une étape précise et demande au junior de mener des entretiens ciblés sur les utilisateurs qui abandonnent pour comprendre le \"pourquoi\"."
  },
  {
    "id": "2.2.1",
    "cat": "2. Découverte & Validation d'Opportunités (Discovery)",
    "sub": "2.2 Synthèse & Expérimentation",
    "skill": "2.2.1 Définition du Problème & Idéation",
    "description": "Capacité à isoler la cause racine d'un problème utilisateur et à générer un large éventail de solutions potentielles avant de converger.",
    "tools": "Google form, Typeform, Productboard, Miro, FigJam",
    "junior": "Participe à des ateliers de brainstorming. Sait formuler un problème utilisateur clairement à partir de retours directs.",
    "senior": "Facilite des ateliers de créativité. Maîtrise l'art de reformuler un problème pour ouvrir le champ des possibles et agrège des insights de sources multiples.",
    "situation": "Face à une demande pour \"un bouton export Excel\", le senior utilise les \"5 Pourquoi\" pour comprendre le besoin de partage de performance, ouvrant des solutions plus pertinentes."
  },
  {
    "id": "2.2.2",
    "cat": "2. Découverte & Validation d'Opportunités (Discovery)",
    "sub": "2.2 Synthèse & Expérimentation",
    "skill": "2.2.2 Conception & Exploration",
    "description": "Traduction des idées en concepts tangibles (parcours, wireframes) pour explorer visuellement la solution et préparer les tests.",
    "tools": "Figma, FigJam",
    "junior": "Conçoit les supports de test sur la base d'un brief fourni et faire passer ces tests.",
    "senior": "Définit les éléments à tester et l'analyse des résultats pour prendre la décision",
    "situation": "Le senior oriente le choix d'une interface complexe vers une version simplifiée suite aux retours d'exploration sur la charge cognitive des utilisateurs."
  },
  {
    "id": "2.2.3",
    "cat": "2. Découverte & Validation d'Opportunités (Discovery)",
    "sub": "2.2 Synthèse & Expérimentation",
    "skill": "2.2.3 Expérimentation & Validation",
    "description": "Mise en œuvre de tests rapides et peu coûteux (MVP, tests A/B) pour valider la valeur et la désirabilité avant le développement complet.",
    "tools": "Maze, Usertesting, Hotjar, Optimizely",
    "junior": "Met en place et mesure des A/B tests simples pour optimiser un élément (ex: un bouton, un titre).",
    "senior": "Conçoit une stratégie d'expérimentation pour dé-risquer les 4 grands risques (valeur, utilisabilité, faisabilité, viabilité). Sait quand utiliser un prototype ou une \"fausse porte\".",
    "situation": "Pour valider l'appétence d'une IA, le senior met en place une \"fausse porte\" : un bouton dont le clic mesure l'intérêt avant même de coder la fonctionnalité."
  },
  {
    "id": "3.1.1",
    "cat": "3. Conception & Livraison (Delivery)",
    "sub": "3.1 Planification & Priorisation",
    "skill": "3.1.1 Gestion de Backlog & Spécifications",
    "description": "Organisation et documentation détaillée des besoins (User Stories) pour assurer une compréhension parfaite par l'équipe d'ingénierie.",
    "tools": "Jira, GitHub Project, Trello",
    "junior": "Rédige des User Stories claires, concises et avec des critères d'acceptation précis. Maintient le backlog propre.",
    "senior": "Gère un backlog comme un outil de communication stratégique. Excelle dans l'art de découper des épopées complexes en tranches de valeur livrables.",
    "situation": "Le senior découpe un projet de 3 mois en étapes hebdomadaires permettant de livrer de la valeur et de collecter du feedback utilisateur dès la deuxième semaine."
  },
  {
    "id": "3.1.2",
    "cat": "3. Conception & Livraison (Delivery)",
    "sub": "3.1 Planification & Priorisation",
    "skill": "3.1.2 Priorisation",
    "description": "Arbitrage rationnel entre les différentes opportunités pour maximiser la valeur délivrée en tenant compte des contraintes de ressources et de temps.",
    "tools": "Jira, GitHub Project, Trello",
    "junior": "Priorise le travail de son équipe au niveau du sprint, souvent en collaboration avec un PM plus senior.",
    "senior": "Maîtrise plusieurs frameworks (RICE, Kano). Communique ses choix de manière transparente et rationnelle. Focus impact et valeur.",
    "situation": "Le senior utilise le framework RICE pour comparer une initiative stratégique complexe à des correctifs rapides, justifiant ses choix par l'impact sur la North Star Metric."
  },
  {
    "id": "3.2.1",
    "cat": "3. Conception & Livraison (Delivery)",
    "sub": "3.2 Exécution & Lancement",
    "skill": "3.2.1 Animation d'équipe & Rituels Agiles",
    "description": "Facilitation de la collaboration quotidienne avec l'équipe de développement en s'appuyant sur les méthodes agiles pour maintenir la vélocité.",
    "tools": "Jira, GitHub Project, Trello",
    "junior": "Participe activement aux rituels (daily, planning, retro). Fait le lien quotidien entre business et tech.",
    "senior": "Facilite les rituels et les rend plus efficaces. Agit comme un \"bouclier\" contre les interruptions et un \"moteur\" pour la motivation.",
    "situation": "Le senior recadre les \"dailies\" s'ils s'éternisent pour se focaliser sur les blocages plutôt que sur le simple rapport d'activité."
  },
  {
    "id": "3.2.2",
    "cat": "3. Conception & Livraison (Delivery)",
    "sub": "3.2 Exécution & Lancement",
    "skill": "3.2.2 Stratégie de Qualité & Tests (QA)",
    "description": "Garantie de la fiabilité du produit via des protocoles de tests rigoureux et une définition claire des standards de qualité avant mise en production.",
    "tools": "TestRail, XRay, Selenium, Postman",
    "junior": "Participe aux tests d'acceptation utilisateur (UAT). Valide la correspondance avec les critères d'acceptation et signale les bugs.",
    "senior": "Définit la stratégie de qualité globale. Se concentre sur la qualité perçue (performance, robustesse). Arbitre sur la criticité des bugs avant release.",
    "situation": "Un bug est découvert avant lancement : le senior analyse l'impact réel et décide de retarder ou non la prod selon le risque sur l'expérience client."
  },
  {
    "id": "3.2.3",
    "cat": "3. Conception & Livraison (Delivery)",
    "sub": "3.2 Exécution & Lancement",
    "skill": "3.2.3 Stratégie de Lancement (Go-to-Market)",
    "description": "Orchestration de la mise sur le marché d'une fonctionnalité pour assurer une adoption maximale et une communication fluide vers les clients.",
    "tools": "AB Tasty, Kameleoon, Optimizely",
    "junior": "Coordonne les lancements (notes de version, formation support) avec le marketing.",
    "senior": "Définit la stratégie complète : segmentation, feature flagging, déploiement progressif et mesure d'impact post-lancement.",
    "situation": "Pour une refonte majeure, le senior prévoit un déploiement progressif (1%, 10%, 50%) avec monitoring des KPIs pour réagir en cas d'imprévu."
  },
  {
    "id": "4.1.1",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.1 Définition de la Stratégie de Mesure",
    "skill": "4.1.1 Définition des KPIs & North Star Metric",
    "description": "Sélection et hiérarchisation des indicateurs clés de performance permettant de piloter la santé et la croissance du produit.",
    "tools": "Amplitude, Mixpanel",
    "junior": "Comprend et suit les KPIs définis. Sait expliquer l'impact de son périmètre sur ces indicateurs.",
    "senior": "Définit la \"North Star Metric\" (NSM) et la décline en arbre de métriques actionnables pour guider les efforts des équipes.",
    "situation": "Le senior définit la NSM non comme le revenu, mais comme la collaboration hebdomadaire, prouvant qu'elle est le levier de rétention long terme."
  },
  {
    "id": "4.1.2",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.1 Définition de la Stratégie de Mesure",
    "skill": "4.1.2 Conception du Plan de Tracking",
    "description": "Définition technique des événements et des propriétés à collecter pour assurer une mesure précise et exploitable des comportements utilisateurs.",
    "tools": "Segment, Google Tag Manager",
    "junior": "Rédige des spécifications de tracking pour ses fonctionnalités en suivant les conventions existantes.",
    "senior": "Conçoit le plan de tracking complet. Définit une taxonomie claire et pérenne pour répondre aux futures questions stratégiques.",
    "situation": "Avant une refonte, le senior conçoit un plan permettant de mesurer l'adoption par segment et la corrélation avec l'upsell, pas seulement les clics."
  },
  {
    "id": "4.2.1",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.2 Analyse & Interprétation",
    "skill": "4.2.1 Maîtrise des Outils d'Analyse",
    "description": "Utilisation experte des plateformes de data et des langages de requête (SQL) pour extraire l'information brute nécessaire à l'analyse.",
    "tools": "SQL, Amplitude, Mixpanel, Tableau",
    "junior": "Maîtrise les outils produit pour construire des dashboards et des funnels simples.",
    "senior": "Va au-delà des outils standards. Écrit des requêtes SQL pour explorer la donnée brute et collabore sur des analyses statistiques complexes.",
    "situation": "Le senior écrit une requête SQL pour isoler les utilisateurs subissant une baisse de conversion et identifie un bug sur un modèle d'appareil spécifique."
  },
  {
    "id": "4.2.2",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.2 Analyse & Interprétation",
    "skill": "4.2.2 Transformation de la Donnée en Insight",
    "description": "Capacité à interpréter les données pour en extraire des recommandations concrètes et orienter les décisions produit.",
    "tools": "Excel, Notion",
    "junior": "Répond à des questions factuelles avec la donnée (ex: taux de conversion d'une page).",
    "senior": "Raconte une histoire avec la donnée, identifie des tendances de fond et transforme une analyse en recommandation stratégique.",
    "situation": "Le senior montre que les utilisateurs d'une fonction sous-utilisée ont une rétention 3x supérieure, identifiant une opportunité majeure d'onboarding."
  },
  {
    "id": "4.3.1",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.3 Communication & Culture de la Donnée",
    "skill": "4.3.1 Visualisation & Communication",
    "description": "Création de supports visuels clairs et de tableaux de bord intuitifs pour rendre les performances du produit accessibles à tous.",
    "tools": "Tableau, PowerBI, Looker",
    "junior": "Sait créer des graphiques clairs et lisibles pour présenter des résultats.",
    "senior": "Maîtrise l'art de la visualisation. Conçoit des dashboards qui communiquent l'état de santé du produit en un coup d'œil pour le management.",
    "situation": "Le senior conçoit un dashboard interactif permettant au management de filtrer les KPIs par segment utilisateur en toute autonomie."
  },
  {
    "id": "4.3.2",
    "cat": "4. Culture & Maîtrise de la Donnée",
    "sub": "4.3 Communication & Culture de la Donnée",
    "skill": "4.3.2 Instaurer une Culture Data-Informed",
    "description": "Promotion de l'usage systématique de la donnée comme preuve dans les prises de décision à tous les niveaux de l'organisation.",
    "tools": "Ateliers internes",
    "junior": "Utilise la donnée dans ses spécifications et rétrospectives pour justifier ses choix.",
    "senior": "Évangélise l'usage de la donnée. Met en place des rituels et des formations pour rendre les équipes autonomes sur l'accès aux données.",
    "situation": "Le senior instaure une \"Revue de Métriques\" hebdomadaire où l'équipe analyse ensemble les performances pour cultiver le réflexe data."
  },
  {
    "id": "5.1.1",
    "cat": "5. Socle Technique & Design",
    "sub": "5.1 Maîtrise des Principes de Product Design",
    "skill": "5.1.1 Principes d'Ergonomie & Design d'Interaction",
    "description": "Connaissance des lois de l'UX et de la psychologie cognitive pour concevoir des interfaces intuitives et sans friction.",
    "tools": "Figma",
    "junior": "Sait appliquer les heuristiques d'ergonomie classiques pour donner un feedback sur des maquettes.",
    "senior": "Maîtrise les patterns de design complexes. Challenge le designer pour pousser la simplicité et l'efficacité de l'expérience.",
    "situation": "Face à un formulaire dense, le senior propose une divulgation progressive (multi-étapes) pour ne pas submerger l'utilisateur."
  },
  {
    "id": "5.1.2",
    "cat": "5. Socle Technique & Design",
    "sub": "5.1 Maîtrise des Principes de Product Design",
    "skill": "5.1.2 Compréhension du Processus de Design",
    "description": "Maîtrise du cycle de conception centrée utilisateur, de la phase d'empathie jusqu'au prototypage haute fidélité.",
    "tools": "Design Thinking",
    "junior": "Comprend les phases du design (recherche, prototypage) et y participe activement.",
    "senior": "Collabore avec le Design Lead pour définir la stratégie de design. Sait quand utiliser un Design Sprint ou des tests itératifs.",
    "situation": "Le senior lance un Design Sprint d'une semaine avec les parties prenantes pour co-créer une solution sur un problème stratégique ambigu."
  },
  {
    "id": "5.1.3",
    "cat": "5. Socle Technique & Design",
    "sub": "5.1 Maîtrise des Principes de Product Design",
    "skill": "5.1.3 Culture du Design System",
    "description": "Connaissance et promotion d'une bibliothèque de composants standardisés pour assurer la cohérence visuelle et l'efficacité technique.",
    "tools": "Figma, Storybook",
    "junior": "Utilise les composants du Design System existant dans ses spécifications pour assurer la cohérence.",
    "senior": "Agit comme un sponsor du Design System. Arbitre entre la création de nouveaux composants et la réutilisation de l'existant.",
    "situation": "Le senior organise une revue avec le design et la tech pour déterminer si un nouveau graphique justifie un nouvel atome dans le Design System."
  },
  {
    "id": "5.2.1",
    "cat": "5. Socle Technique & Design",
    "sub": "5.2 Maîtrise des Principes d'Ingénierie",
    "skill": "5.2.1 Compréhension de l'Architecture Logicielle",
    "description": "Connaissance structurelle du fonctionnement technique du produit (API, BDD, services) pour en comprendre les capacités et les limites.",
    "tools": "Diagrammes d'architecture",
    "junior": "Comprend l'architecture de son produit (front, back, API REST, base de données).",
    "senior": "Compréhension stratégique des choix d'architecture (microservices, etc.) et de leurs impacts sur la performance et les coûts.",
    "situation": "Le senior challenge une solution créant un couplage fort et oriente vers une architecture par événements pour garantir la scalabilité future."
  },
  {
    "id": "5.2.2",
    "cat": "5. Socle Technique & Design",
    "sub": "5.2 Maîtrise des Principes d'Ingénierie",
    "skill": "5.2.2 Compréhension du Cycle de Développement",
    "description": "Connaissance des étapes techniques de création d'un logiciel, de l'écriture du code jusqu'à sa maintenance en production.",
    "tools": "Git, CI/CD pipelines",
    "junior": "Comprend le versionnement (Git) et les rituels de développement de son équipe.",
    "senior": "Comprend les enjeux de CI/CD, de tests automatisés et de dette technique. Négocie l'allocation de bande passante pour la refactorisation.",
    "situation": "Le senior justifie auprès de la direction de dédier 20% du trimestre à la dette technique pour restaurer la vélocité de l'équipe."
  },
  {
    "id": "6.1.1",
    "cat": "6. Product Ops",
    "sub": "6.1 Processus & Outils",
    "skill": "6.1.1 Standardisation des Processus",
    "description": "Création et maintenance de méthodes de travail uniformes au sein de l'organisation pour améliorer l'efficacité collective.",
    "tools": "Notion, Coda",
    "junior": "Applique les processus et les outils définis par l'équipe (templates de specs, process de release).",
    "senior": "Conçoit et améliore les processus à l'échelle (Discovery, priorisation trimestrielle) pour garantir l'efficacité de l'organisation.",
    "situation": "Le senior met en place un \"Product Playbook\" centralisé pour accélérer l'onboarding et harmoniser les méthodes entre squads."
  },
  {
    "id": "6.2.1",
    "cat": "6. Product Ops",
    "sub": "6.2 Communication & Gouvernance",
    "skill": "6.2.1 Gouvernance de la Donnée Produit",
    "description": "Gestion de l'intégrité, de l'accessibilité et de la documentation des données partagées pour assurer une source de vérité unique.",
    "tools": "Data Dictionary",
    "junior": "S'assure que les données de son périmètre sont fiables et bien documentées.",
    "senior": "Met en place une gouvernance pour les outils et les données (dictionnaire de données partagé) pour une source de vérité fiable.",
    "situation": "Le senior lance un projet de standardisation du nommage des événements de tracking pour garantir la propreté de la donnée à long terme."
  },
  {
    "id": "6.2.2",
    "cat": "6. Product Ops",
    "sub": "6.2 Communication & Gouvernance",
    "skill": "6.2.2 Communication & Rituels d'Équipe",
    "description": "Organisation des flux d'information entre le produit et le reste de l'entreprise pour maintenir la visibilité et l'alignement global.",
    "tools": "Slack, Newsletters internes",
    "junior": "Prépare et partage les notes de version pour ses nouvelles fonctionnalités.",
    "senior": "Anime les rituels de communication de l'organisation (démos mensuelles) pour assurer la visibilité entre toutes les équipes.",
    "situation": "Le senior instaure une \"Revue Produit\" mensuelle où chaque équipe partage ses succès et échecs, favorisant la transparence."
  },
  {
    "id": "7.1.1",
    "cat": "7. AI Product Builder",
    "sub": "7.1 Stratégie & Identification d'Opportunités IA",
    "skill": "7.1.1 Compréhension Fondamentale de l'IA",
    "description": "Maîtrise théorique des concepts d'apprentissage machine (modèles, entraînements, LLM) pour en évaluer les applications possibles.",
    "tools": "OpenAI API, Hugging Face",
    "junior": "Comprend les concepts de base (Supervisé, Classification, LLM). Sait ce qu'est un modèle et une API.",
    "senior": "Compréhension profonde des familles de modèles. Évalue les compromis entre modèle sur étagère, fine-tuning ou construction maison.",
    "situation": "Le senior oriente l'équipe vers le fine-tuning d'un modèle open-source plutôt qu'une API coûteuse pour un besoin spécifique de résumé."
  },
  {
    "id": "7.1.2",
    "cat": "7. AI Product Builder",
    "sub": "7.1 Stratégie & Identification d'Opportunités IA",
    "skill": "7.1.2 Identification de Cas d'Usage IA",
    "description": "Aptitude à repérer les problèmes métier pouvant être résolus de manière optimale par une approche basée sur l'intelligence artificielle.",
    "tools": "Value Prop Canvas",
    "junior": "Identifie des opportunités simples d'automatisation ou de prédiction dans son périmètre.",
    "senior": "Identifie pro-activement des problèmes business complexes insolubles sans IA. Pense en termes de produits \"AI-first\".",
    "situation": "Le senior imagine un \"Agent Copilot\" pour le support client qui pré-remplit les tickets en temps réel, multipliant la productivité."
  },
  {
    "id": "7.1.3",
    "cat": "7. AI Product Builder",
    "sub": "7.1 Stratégie & Identification d'Opportunités IA",
    "skill": "7.1.3 Stratégie de Données pour l'IA",
    "description": "Orchestration de la collecte et de la gestion des données comme actif stratégique indispensable à la performance des modèles.",
    "tools": "Data Pipeline diagrams",
    "junior": "Comprend l'importance de la donnée de qualité. Participe à la définition des besoins pour un projet simple.",
    "senior": "Définit la stratégie d'acquisition comme un avantage concurrentiel. Met en place des boucles de rétroaction (flywheels) data.",
    "situation": "Le senior conçoit une fonction incitant l'utilisateur à donner un feedback sur une reco, feedback réutilisé pour améliorer le modèle."
  },
  {
    "id": "7.2.1",
    "cat": "7. AI Product Builder",
    "sub": "7.2 Gestion du Cycle de Vie du Modèle (MLOps)",
    "skill": "7.2.1 Annotation & Préparation des Données",
    "description": "Supervision du processus de labellisation et de nettoyage des données pour garantir la fiabilité des jeux d'entraînement.",
    "tools": "Labelbox, Scale AI",
    "junior": "Participe à des tâches de labellisation ou vérifie la qualité d'un jeu de données fourni.",
    "senior": "Conçoit et supervise la stratégie d'annotation : choix des outils, contrôle qualité et décision d'externalisation.",
    "situation": "Le senior met en place un processus de validation par experts internes suite à une première passe d'annotation externe pour une IA d'images."
  },
  {
    "id": "7.2.2",
    "cat": "7. AI Product Builder",
    "sub": "7.2 Gestion du Cycle de Vie du Modèle (MLOps)",
    "skill": "7.2.2 Entraînement & Évaluation du Modèle",
    "description": "Analyse de la performance technique du modèle par rapport à des métriques métier pour décider de sa mise en service.",
    "tools": "Weights & Biases",
    "junior": "Comprend les métriques de base (Précision, Rappel) et suit l'avancement des entraînements.",
    "senior": "Définit les métriques liées à l'impact business. Challenge les Data Scientists sur leurs choix d'optimisation.",
    "situation": "Le senior identifie qu'une précision de 95% cache une faiblesse sur un segment critique et demande d'optimiser le \"Rappel\" sur ce segment."
  },
  {
    "id": "7.2.3",
    "cat": "7. AI Product Builder",
    "sub": "7.2 Gestion du Cycle de Vie du Modèle (MLOps)",
    "skill": "7.2.3 Déploiement & Monitoring en Production",
    "description": "Gestion opérationnelle du modèle une fois live, incluant la surveillance des dérives (drifts) et les cycles de ré-entraînement.",
    "tools": "Grafana, Kibana",
    "junior": "Coordonne le déploiement d'une nouvelle version du modèle avec l'équipe technique.",
    "senior": "Définit la stratégie de déploiement (Canary). Surveille les dérives (model drift) et planifie les ré-entraînements.",
    "situation": "Le senior installe une alerte automatique si les données de prod s'éloignent trop de l'entraînement, déclenchant un ré-entraînement."
  },
  {
    "id": "7.3.1",
    "cat": "7. AI Product Builder",
    "sub": "7.3 Expérience Utilisateur & Éthique pour l'IA",
    "skill": "7.3.1 Design d'Interaction pour l'IA",
    "description": "Conception d'interfaces gérant les spécificités de l'IA comme l'incertitude, l'explicabilité et le feedback utilisateur.",
    "tools": "Figma",
    "junior": "Participe à la conception d'interfaces IA simples en se concentrant sur la clarté.",
    "senior": "Maîtrise les patterns IA : gérer l'incertitude, expliquer les décisions et permettre à l'utilisateur de garder le contrôle.",
    "situation": "Le senior conçoit une interface expliquant pourquoi un produit est recommandé (\"Parce que vous avez aimé X\") pour rassurer l'utilisateur."
  },
  {
    "id": "7.3.2",
    "cat": "7. AI Product Builder",
    "sub": "7.3 Expérience Utilisateur & Éthique pour l'IA",
    "skill": "7.3.2 Éthique & IA Responsable",
    "description": "Surveillance active des biais algorithmiques et garantie d'un usage sécurisé et juste du produit IA.",
    "tools": "AI Ethics frameworks",
    "junior": "Est sensibilisé aux biais potentiels dans les données et les algorithmes.",
    "senior": "Intègre l'éthique au cœur du design. Mène des analyses de risques (Red Teaming) pour identifier les biais et usages malveillants.",
    "situation": "Le senior organise un atelier \"Red Team\" pour identifier les biais de genre potentiels d'un outil de scoring de CV avant lancement."
  }
];

// ===== ASSESSMENT TEST DATA =====
// Questions used in the self-assessment test (same structure as explorerData)
const testQuestions = explorerData;

// For backward compatibility
const skillsData = explorerData;

// ===== AVERAGE PM PROFILE BENCHMARK =====
// Reference profile from aggregated assessments of successful PMs
const averagePMProfile = {
    "0. Leadership & Influence": 1.9,
    "1. Stratégie & Vision Produit": 2.0,
    "2. Découverte (Discovery)": 2.3,
    "3. Conception & Livraison (Delivery)": 2.7,
    "4. Data Culture": 2.9,
    "5. Socle Tech & Design": 2.3,
    "6. Product Ops": 2.0,
    "7. AI Product Builder": 2.7
};

// ===== PM PROFILE ARCHETYPES =====
const profileRules = [
  {
    "cat": "0. Leadership & Influence",
    "title": "Le Coach Stratège",
    "desc": "Véritable pivot humain, vous ne vous contentez pas de diriger, vous développez les autres. Votre force réside dans votre capacité à transformer une vision complexe en un récit (storytelling) qui crée un alignement naturel, même sans autorité hiérarchique.",
    "mission": "Animer un comité de direction pour un arbitrage budgétaire, gérer des situations de crise inter-équipes ou mettre en place un programme de mentorat PM.",
    "improve": "Passer d'une communication factuelle/opérationnelle à un storytelling d'influence adapté à des interlocuteurs C-Level.",
    "improveWhy": "Sans influence stratégique, le PM reste un simple coordinateur. Le leadership permet d'obtenir les ressources nécessaires et de protéger l'équipe des interruptions externes.",
    "improveMission": "Porter une initiative 'pari risqué' devant le board et négocier l'alignement de départements aux intérêts divergents (ex: Sales vs Tech)."
  },
  {
    "cat": "1. Stratégie & Vision Produit",
    "title": "Le Stratège de Marché",
    "desc": "Vous êtes le garant de la viabilité économique à long terme. Vous savez lire entre les lignes des tendances de marché pour identifier les opportunités de rupture (Product-Led Growth, nouveaux business models).",
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
    "cat": "7. AI Product Builder",
    "title": "Le Shaper d'Intelligence",
    "desc": "Vous ne voyez pas l'IA comme un gadget, mais comme un nouveau matériau de construction. Vous maîtrisez le cycle de vie des modèles et les boucles de rétroaction de données (flywheels).",
    "mission": "Transformer un service client manuel en une expérience augmentée par un LLM fine-tuné ou automatiser la détection de fraude.",
    "improve": "Approfondir la gestion du 'Model Drift' (dérive des modèles) et les enjeux d'éthique et de biais algorithmiques.",
    "improveWhy": "L'IA introduit une incertitude que le logiciel classique n'a pas. Comprendre le MLOps est crucial pour garantir que le produit reste performant et éthique dans le temps.",
    "improveMission": "Mettre en place une stratégie d'annotation de données 'Human-in-the-loop' pour améliorer la précision d'un modèle prédictif métier."
  }
]