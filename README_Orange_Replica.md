# 🍊 Réplique Orange.pl

Une réplique fidèle du site Orange.pl avec une page de connexion et une page de mise à jour des informations client.

## 📋 Description

Ce projet reproduit l'interface utilisateur d'Orange Polska avec :
- **Page de connexion** : Interface d'authentification complète avec le design Orange
- **Page de mise à jour** : Notification pour informer les clients que leurs informations doivent être mises à jour

## 🎨 Fonctionnalités

### Page de Connexion (`/login`)
- ✅ Design fidèle à Orange.pl avec couleurs officielles (#FF6600)
- ✅ Formulaire de connexion avec email/téléphone et mot de passe
- ✅ Option "Se souvenir de moi" et lien "Mot de passe oublié"
- ✅ Connexion via réseaux sociaux (Facebook, Google)
- ✅ Interface responsive pour tous les appareils
- ✅ Textes en polonais authentiques

### Page de Mise à Jour (`/update-info`)
- ✅ Notification d'avertissement claire et visible
- ✅ Explication des raisons de la mise à jour
- ✅ Guide étape par étape pour l'utilisateur
- ✅ Boutons d'action (Mettre à jour maintenant / Rappeler plus tard)
- ✅ Section d'aide avec contacts Orange
- ✅ Design professionnel et rassurant

## 🛠️ Technologies Utilisées

- **React 19** - Framework JavaScript moderne
- **React Router DOM** - Navigation entre les pages
- **CSS3** - Styles personnalisés avec animations
- **Responsive Design** - Compatible mobile, tablette, desktop

## 📁 Structure du Projet

```
frontend/
├── src/
│   ├── pages/
│   │   ├── LoginPage.js          # Page de connexion
│   │   └── UpdateInfoPage.js     # Page de mise à jour
│   ├── styles/
│   │   ├── LoginPage.css         # Styles page de connexion
│   │   └── UpdateInfoPage.css    # Styles page de mise à jour
│   ├── App.js                    # Composant principal
│   ├── App.css                   # Styles globaux
│   └── index.js                  # Point d'entrée
├── public/
└── package.json
```

## 🚀 Installation et Utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- Yarn ou npm

### Installation
```bash
cd frontend
yarn install
# ou
npm install
```

### Lancement de l'application
```bash
yarn start
# ou
npm start
```

L'application sera accessible sur `http://localhost:3000`

### Navigation
- **Page d'accueil** (`/`) : Redirige vers la page de connexion
- **Page de connexion** (`/login`) : Interface d'authentification
- **Page de mise à jour** (`/update-info`) : Notification de mise à jour

## 🎯 Fonctionnement

1. **Connexion** : L'utilisateur arrive sur la page de connexion
2. **Authentification** : Après soumission du formulaire, redirection vers la page de mise à jour
3. **Notification** : L'utilisateur voit l'avertissement de mise à jour des données
4. **Actions** : Choix entre mettre à jour immédiatement ou reporter

## 🎨 Design et UX

### Couleurs Orange Officielles
- **Orange Principal** : `#FF6600`
- **Orange Dégradé** : `#FF8533`
- **Arrière-plan** : `#F5F5F5`
- **Texte** : `#333333`

### Typographie
- **Police** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Poids** : 400 (normal), 600 (semi-bold), 700 (bold)

### Responsive Design
- **Desktop** : Layout en deux colonnes
- **Tablette** : Layout adaptatif
- **Mobile** : Layout en une colonne avec navigation simplifiée

## 📱 Aperçu des Pages

### Page de Connexion
- Header avec logo Orange et sélecteur de langue
- Formulaire centré avec champs stylisés
- Sidebar promotionnelle avec avantages Orange
- Footer avec liens légaux

### Page de Mise à Jour
- Header avec logo et menu utilisateur
- Message d'avertissement proéminent
- Carte explicative avec raisons de la mise à jour
- Guide en 3 étapes
- Boutons d'action clairs
- Section d'aide avec contacts

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les fichiers CSS dans `src/styles/` :
```css
:root {
  --orange-primary: #FF6600;
  --orange-secondary: #FF8533;
  --background: #F5F5F5;
}
```

### Ajouter des pages
1. Créer le composant dans `src/pages/`
2. Ajouter les styles dans `src/styles/`
3. Configurer la route dans `App.js`

## 📄 Démonstration

Un fichier `demo.html` est inclus pour voir un aperçu statique des deux pages sans avoir besoin de lancer React.

## 🤝 Contribution

Ce projet est une démonstration de réplication d'interface. Pour des améliorations :
1. Fork le projet
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est à des fins éducatives et de démonstration uniquement. Orange et Orange.pl sont des marques déposées d'Orange S.A.

## 🔍 Points Techniques

### Gestion d'État
- Utilisation des hooks React (useState, useNavigate)
- Navigation programmatique avec React Router

### Performance
- Composants fonctionnels optimisés
- CSS modulaire pour un chargement rapide
- Images optimisées et icônes SVG

### Accessibilité
- Labels appropriés pour les formulaires
- Contraste de couleurs respecté
- Navigation au clavier supportée

### Sécurité
- Validation côté client
- Échappement des entrées utilisateur
- Headers de sécurité recommandés

---

**Note** : Cette réplique est créée à des fins éducatives et ne doit pas être utilisée à des fins commerciales sans autorisation d'Orange.