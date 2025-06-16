# Site Web TP N'SIKAN PROJET ESPOIR

Un site web moderne et raffiné pour l'entreprise de construction TP N'SIKAN PROJET ESPOIR, développé avec React, TypeScript et Tailwind CSS.

## 🎨 Charte Graphique

Le site utilise les couleurs extraites du logo TP N'SIKAN :
- **Vert principal** : `#22c55e` (tp-green-500)
- **Rouge bordeaux** : `#8b1538` (tp-burgundy-500)  
- **Gris** : `#6b7280` (tp-gray-500)

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd tp-nsikan-website

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation et header
│   ├── HeroSlider.tsx  # Slider principal avec images
│   ├── About.tsx       # Section à propos
│   ├── Services.tsx    # Services proposés
│   ├── Projects.tsx    # Portfolio des réalisations
│   ├── Contact.tsx     # Formulaire de contact
│   └── Footer.tsx      # Pied de page
├── App.tsx             # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🎯 Fonctionnalités

### ✅ Implémentées
- **Slider moderne** avec défilement automatique des images de maisons
- **Design responsive** adapté à tous les écrans
- **Animations fluides** avec Framer Motion
- **Navigation fixe** avec effet de transparence
- **Formulaire de contact** fonctionnel
- **Portfolio filtrable** par catégorie de projets
- **Optimisation SEO** de base

### 🔧 Personnalisation Facile

#### Modifier les Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
```javascript
colors: {
  'tp-green': { /* Nuances de vert */ },
  'tp-burgundy': { /* Nuances de bordeaux */ },
  'tp-gray': { /* Nuances de gris */ }
}
```

#### Changer les Images du Slider
Dans `src/components/HeroSlider.tsx`, modifiez le tableau `slides` :
```javascript
const slides = [
  {
    image: 'URL_DE_VOTRE_IMAGE',
    title: 'Votre Titre',
    subtitle: 'Votre Sous-titre',
    description: 'Votre Description'
  }
];
```

#### Modifier les Informations de Contact
Dans `src/components/Contact.tsx` et `src/components/Footer.tsx`, mettez à jour :
- Numéros de téléphone
- Adresses email
- Adresse physique
- Liens des réseaux sociaux

#### Ajouter/Modifier les Services
Dans `src/components/Services.tsx`, modifiez le tableau `services` :
```javascript
const services = [
  {
    icon: IconComponent,
    title: 'Nom du Service',
    description: 'Description du service',
    features: ['Caractéristique 1', 'Caractéristique 2']
  }
];
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🎨 Animations

Le site utilise Framer Motion pour :
- Animations d'apparition au scroll
- Transitions fluides entre les sections
- Effets hover sur les boutons et cartes
- Slider automatique avec transitions

## 📧 Formulaire de Contact

Le formulaire collecte :
- Nom complet
- Email
- Téléphone
- Type de projet
- Message détaillé

**Note** : Actuellement, le formulaire affiche une alerte. Pour l'intégrer avec un backend, modifiez la fonction `handleSubmit` dans `Contact.tsx`.

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Déploiement sur Netlify
1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Déployez automatiquement

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🔧 Configuration Avancée

### Variables d'Environnement
Créez un fichier `.env` pour les configurations :
```env
VITE_CONTACT_EMAIL=contact@tpnsikan.com
VITE_PHONE_NUMBER=+225XXXXXXXXXX
VITE_FACEBOOK_URL=https://www.facebook.com/tpnsikanprojetespoir
```

### Optimisation SEO
- Métadonnées dans `index.html`
- Balises alt sur toutes les images
- Structure sémantique HTML5
- Sitemap.xml (à ajouter)

## 📞 Support

Pour toute question ou personnalisation :
1. Consultez la documentation des composants
2. Vérifiez les commentaires dans le code
3. Testez les modifications en mode développement

## 🔄 Mises à Jour

Pour mettre à jour les dépendances :
```bash
npm update
```

## 📋 Checklist de Personnalisation

- [ ] Remplacer le logo dans `/public/`
- [ ] Modifier les informations de contact
- [ ] Ajouter les vraies images des projets
- [ ] Configurer le formulaire de contact
- [ ] Personnaliser les textes et descriptions
- [ ] Tester sur mobile et desktop
- [ ] Optimiser les images
- [ ] Configurer le domaine personnalisé

---

**TP N'SIKAN PROJET ESPOIR** - Site web développé avec ❤️ et expertise technique.