const logotext = "DFV";
const meta = {
    title: "DIOMANDE FRANCK VIANNEY",
    description: "I'm Diomande Franck Vianney — Full Stack Developer & Odoo Expert from Côte d'Ivoire. Passionate about building real, no-CMS, 100% custom-coded projects.",
};

const introdata = {
    title: "intro_title",
    animated: {
        first: "intro_animated_first",
        second: "intro_animated_second",
        third: "intro_animated_third",
    },
    description: "intro_description",
    your_img_url: "/photo.webp",
};

const dataabout = {
    title: "About me",
    aboutme: "aboutme",
};
const worktimeline = [{
        jobtitle: "Work_FullStack_Developer",
        where: "Work_Ministry_Digital",
        date: "2025",
    },
    {
        jobtitle: "Work_Odoo_React_Developer",
        where: "Work_Ministry_Digital",
        date: "2025",
    },
    {
        jobtitle: "Work_Odoo_Developer",
        where: "Work_Ministry_Digital",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Odoo 16/17/18",
        value: 90,
    },
    {
        name: "Django",
        value: 70,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "ReactJs",
        value: 85,
    },
    {
        name: "NodeJs",
        value: 85,
    },
    
];

const services = [{
        title: "Custom_Odoo_Development",
        description: "Odoo_Development_Desc",
    },
    {
        title: "Full_Stack_Web_Apps",
        description: "Full_Stack_Desc",
    },
    {
        title: "Frontend_Redesign",
        description: "Frontend_Desc",
    },
    {
        title: "Technical_Consulting",
        description: "Consulting_Desc",
    },
    {
        title: "Maintenance_Support",
        description: "Maintenance_Desc",
    },
    {
        title: "System_Admin",
        description: "System_Admin_Desc",
    },
];

// NOTE: "result" reste à renseigner projet par projet (impact concret,
// pas de chiffre inventé). Laisser à null tant que l'info n'est pas fournie.
const dataportfolio = [
    {
        title: "Kontinental Audit",
        category: "web",
        description: "Site web d'une entreprise dans le domaine de l'audit avec backend",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
        link: "https://github.com/franckvianney225/kontinental-audit-react",
    },
    {
        title: "Ivoire Tech Forum",
        category: "web",
        description: "Formulaire d'enregistrement des panelistes de Ivoire Tech Forum",
        stack: ["React", "Vite", "Node.js", "SQLite"],
        link: "https://github.com/franckvianney225/ivoir_tech_form",
    },
    {
        title: "Conférence Nationale sur l'IA",
        category: "web",
        description: "Site web Fullstack pour la conference nationale de l'intelligence artificielle",
        stack: ["React", "Vite", "Node.js", "Express", "MySQL"],
        link: "https://github.com/franckvianney225/cnia_2025",
    },
    {
        title: "Compte à Rebours Événementiel",
        category: "web",
        stack: ["React", "Vite", "Node.js", "Socket.io", "SQLite"],
        description: "Site web de compte à rebours pour tout type de conferences ou d'évènements",
        link: "https://github.com/franckvianney225/count_down",
    },
    {
        title: "Quick Meeting (App Web)",
        category: "web",
        description: "Plateforme de gestion de réunions et de présence : check-in par QR code, tableau de bord administrateur avec statistiques et graphiques, génération de listes de présence en PDF.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        result: null,
        link: "https://github.com/franckvianney225/quick_meeting_react",
    },
    {
        title: "Plateforme de Blog",
        category: "web",
        description: "Blog complet avec back-office : articles, catégories, tags, commentaires, abonnés et éditeur WYSIWYG. Couvert par une suite de 44 tests automatisés.",
        stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
        result: null,
        link: "https://github.com/franckvianney225/blog",
    },
    {
        title: "E-cartes",
        category: "web",
        description: "Cartes de visite numériques avec QR codes dynamiques : création, personnalisation de modèles et suivi via un espace d'administration. Architecture en monorepo (API + frontend séparés).",
        stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
        result: null,
        link: "https://github.com/franckvianney225/E-cartes",
    },
    {
        title: "Partage Sécurisé de Documents",
        category: "web",
        description: "Plateforme interne de partage de documents avec liens protégés par mot de passe, suivi des consultations et notification à chaque ouverture.",
        stack: ["Next.js", "NextAuth", "Prisma", "PostgreSQL"],
        result: null,
        link: null, // projet interne, dépôt privé
    },
    {
        title: "Plateforme de Candidatures OMPT",
        category: "web",
        description: "Plateforme de gestion des candidatures pour l'Ordre du Mérite des Postes et Télécommunications de Côte d'Ivoire : formulaire de candidature public, interface d'administration (suivi des candidats, journal d'audit), authentification sécurisée.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Docker"],
        result: null,
        link: null, // projet interne, dépôt privé
    },
    {
        title: "Journées du Droit du Numérique (JDN)",
        category: "web",
        description: "Site officiel de la 2ᵉ édition des Journées du Droit du Numérique (Ministère de la Transition Numérique) : programme et timeline de l'événement, fiches intervenants, module hackathon avec vérification de deadline, back-office d'administration, et tracking analytics respectueux du consentement cookies.",
        stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Turborepo", "Docker"],
        result: null,
        link: null, // projet interne, dépôt privé
    },
    {
        title: "Gestion Électronique du Courrier (Odoo)",
        category: "odoo",
        description: "Module Odoo de gestion du courrier entrant et sortant avec workflow de validation à 3 niveaux (Service courrier → Cabinet → Directeur de Cabinet), tableau de bord temps réel et pipeline CI/CD.",
        stack: ["Odoo 17", "Python", "PostgreSQL", "CI/CD"],
        result: "Tableau de bord avec 6 indicateurs de suivi en temps réel et correctif de sécurité XSS (échappement HTML dans les notifications).",
        link: null, // module interne, dépôt privé
    },
    {
        title: "Quick Meetings (Module Odoo)",
        category: "odoo",
        description: "Module Odoo de gestion des réunions et de la présence : réservation de salles, portail public de check-in par code unique, export de listes de présence.",
        stack: ["Odoo 17", "Python", "PostgreSQL", "JavaScript"],
        result: "Durcissement sécurité documenté : code de réunion passé d'environ 1 million à 340 undécillions de combinaisons possibles (protection contre l'énumération par force brute), suppression d'un anti-pattern de transaction, masquage des erreurs serveur en production.",
        link: null, // module interne, dépôt privé
    },
    {
        title: "Générateur QR & Cartes de Visite Numériques (Odoo)",
        category: "odoo",
        description: "Module Odoo conçu pour la vente sur l'Odoo Apps Store : génération de QR codes avec export PDF, et cartes de visite numériques (e-contact) avec 4 designs de portail (public, professionnel, créatif, corporate).",
        stack: ["Odoo 17", "Python", "QR Code", "i18n FR/EN"],
        result: null,
        link: null, // module interne, dépôt privé
    },
    {
        title: "Campagnes d'Information Interne (Odoo)",
        category: "odoo",
        description: "Module Odoo de pop-up de communication interne : campagnes avec états, priorités et ciblage d'utilisateurs, 3 modes d'affichage (unique, systématique, répétition programmée), et suivi statistique des vues par utilisateur.",
        stack: ["Odoo 17", "Python", "JavaScript"],
        result: null,
        link: "https://github.com/franckvianney225/information_campaign",
    },
];

const contactConfig = {
    YOUR_EMAIL: "diomandefranckvianney@gmail.com",
    YOUR_FONE: "+225 0778181471",
    description: "Développeur full stack basé en Côte d’Ivoire, je conçois des applications sur mesure avec une approche orientée qualité. Contactez-moi pour toute collaboration.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_dknm0te",
    YOUR_TEMPLATE_ID: "template_uivemvb",
    YOUR_USER_ID: "NRnc0My5bLPxzUBpd",
};

const socialprofils = {
    github: "https://github.com/franckvianney225",
    facebook: "https://web.facebook.com/vianney.franckdiomande/?locale=fr_FR",
    linkedin: "https://www.linkedin.com/in/franck-vianney-diomande-864b8193/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};