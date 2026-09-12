# Portfolio — Diomande Franck Vianney

Portfolio personnel de **Diomande Franck Vianney**, développeur Full Stack &
spécialiste Odoo basé en Côte d'Ivoire. Site vitrine présentant mon parcours,
mes compétences et mes projets.

🔗 Démo : voir la configuration de déploiement dans `netlify.toml`

## Stack technique

- [React](https://react.dev/) 18 (Create React App / `react-scripts`)
- [React Router](https://reactrouter.com/) pour la navigation
- [React Bootstrap](https://react-bootstrap.github.io/) + Bootstrap 5
- [Framer Motion](https://www.framer.com/motion/) pour les transitions de page
- [Styled Components](https://styled-components.com/)
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact
- [Typewriter Effect](https://github.com/tameemsafi/typewriter-effect) pour l'animation du texte d'intro

## Fonctionnalités

- Multilingue français / anglais (sélection persistée, voir `src/hooks/useTranslation.js`)
- Thème clair / sombre (persisté en `localStorage`)
- Pages : Accueil, À propos, Portfolio, Contact
- Formulaire de contact fonctionnel via EmailJS

## Démarrage local

```bash
npm install
npm start
```

L'application démarre sur [http://localhost:3000](http://localhost:3000)
(utilisez `PORT=3100 npm start` pour changer de port si celui-ci est occupé).

## Scripts disponibles

| Commande         | Description                                  |
| ---------------- | --------------------------------------------- |
| `npm start`       | Lance le serveur de développement            |
| `npm test`        | Lance la suite de tests (Jest + Testing Library) |
| `npm run build`    | Génère le build de production dans `build/`  |

## Déploiement

Le projet est configuré pour être déployé sur [Netlify](https://www.netlify.com/)
(voir `netlify.toml` : commande de build `npm run build`, dossier publié `build/`).

## Contenu éditable

Toutes les informations personnelles (bio, compétences, projets, contact,
réseaux sociaux) sont centralisées dans
[`src/content_option.js`](src/content_option.js), et les textes traduits dans
[`src/content/fr.json`](src/content/fr.json) /
[`src/content/en.json`](src/content/en.json).

## Crédits

Basé à l'origine sur le template open-source [reactfolio](https://github.com/ubaimutl/reactfolio)
d'Ubai Mutl (licence MIT, voir [`LICENSE`](LICENSE)), largement personnalisé
depuis (contenu, design, i18n, thème, formulaire de contact).

## Contact

- Email : [diomandefranckvianney@gmail.com](mailto:diomandefranckvianney@gmail.com)
- GitHub : [@franckvianney225](https://github.com/franckvianney225)
- LinkedIn : [franck-vianney-diomande](https://www.linkedin.com/in/franck-vianney-diomande-864b8193/)
