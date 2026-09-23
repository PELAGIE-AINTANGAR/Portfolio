# 👩‍💻 Portfolio — Pélagie Aintangar

Bienvenue sur le repository de mon **portfolio développeuse Web Full Stack**.

🌐 **Portfolio en ligne :**
https://etudiant-07-portfolio.development.atelier.ovh/

🔗 **LinkedIn :**
https://linkedin.com/in/pelagieaintangar

💻 **GitHub :**
https://github.com/PELAGIE-AINTANGAR


## 👋 À propos

Je suis **Pélagie Aintangar**, actuellement en **Master 2 Développement Web Full Stack à La Plateforme_** à Marseille.

Je recherche une **alternance en développement Web Full Stack** afin de continuer à développer mes compétences sur des projets concrets.

Je m'intéresse particulièrement au développement d'applications web, aux API, à la qualité du code, à la sécurité, au déploiement et à l'intégration de l'IA dans les applications.

📍 **Mobilité :** Sud de la France · Paris & Île-de-France



## 🚀 À propos du projet

Ce portfolio présente mon parcours, mes compétences et les projets sur lesquels j'ai travaillé.

Il a été conçu comme une application web moderne avec **React et Vite**, puis conteneurisé avec **Docker** et déployé sur **Kubernetes**.

Le projet me permet également de mettre en pratique une démarche de développement incluant :

* développement frontend ;
* gestion de composants React ;
* responsive design ;
* intégration de projets ;
* gestion de versions avec Git ;
* automatisation CI/CD ;
* conteneurisation avec Docker ;
* déploiement avec Kubernetes.



## 🛠️ Technologies utilisées

### Frontend

* HTML5
* CSS3
* JavaScript
* React
* Vite

### DevOps & déploiement

* Git
* GitHub
* GitHub Actions
* Docker
* Kubernetes
* Nginx

### Qualité & développement

* ESLint


## 📂 Structure du projet

```text
Portfolio/
├── public/
│   └── og-image.png
│
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── Dockerfile
└── README.md
```


## ✨ Fonctionnalités

Le portfolio présente notamment :

* 👩‍💻 une présentation personnelle ;
* 🛠️ mes compétences techniques ;
* 🚀 mes projets ;
* 📄 mon CV ;
* 🔗 mes profils professionnels ;
* 📬 une section de contact ;
* 📱 une interface responsive adaptée aux différents écrans.



## 🤖 Intérêt pour l'IA

Je m'intéresse également à l'intégration de l'intelligence artificielle dans les applications web.

Cette orientation est notamment mise en pratique dans mon projet **TaskFlow**, dans lequel j'ai intégré une fonctionnalité d'analyse de User Stories par IA.

L'objectif est de continuer à développer mes compétences autour des API d'IA, des LLM et de leur intégration dans des applications web.


## 🐳 Installation

### Prérequis

Avant de lancer le projet, vous devez disposer de :

* Node.js
* npm
* Git

### Cloner le repository

```bash
git clone https://github.com/PELAGIE-AINTANGAR/portfolio.git
```

Puis :

```bash
cd portfolio
```

### Installer les dépendances

```bash
npm install
```

### Lancer le projet en développement

```bash
npm run dev
```

Le portfolio sera alors accessible localement à l'adresse indiquée par Vite.



## 🏗️ Build de production

Pour générer la version de production :

```bash
npm run build
```

Pour tester le build localement :

```bash
npm run preview
```


## 🐳 Docker

Le projet peut également être exécuté avec Docker.

### Construire l'image

```bash
docker build -t pelagie-portfolio .
```

### Lancer le conteneur

```bash
docker run -p 8080:80 pelagie-portfolio
```

Le portfolio sera alors accessible sur :

```text
http://localhost:8080
```


## ☸️ Déploiement Kubernetes

Le portfolio est déployé sur un cluster **Kubernetes**.

L'architecture de déploiement repose notamment sur :

```text
                    GitHub
                       │
                       ▼
               GitHub Actions
                       │
                       ▼
                Docker Build
                       │
                       ▼
                    GHCR
                       │
                       ▼
                 Kubernetes
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        Portfolio Pod       Portfolio Pod
             │                   │
             └─────────┬─────────┘
                       ▼
                     Nginx
                       │
                       ▼
                 Portfolio Web
```

Le déploiement permet notamment d'utiliser plusieurs replicas du portfolio afin d'assurer sa disponibilité.


## 🔄 CI/CD

Le projet utilise **GitHub Actions** afin d'automatiser différentes étapes du cycle de développement.

Le workflow permet notamment de :

1. récupérer le code ;
2. installer les dépendances ;
3. vérifier la qualité du code ;
4. construire l'application ;
5. construire l'image Docker ;
6. publier l'image ;
7. déployer la nouvelle version.



## 📸 Aperçu

🌐 **Voir le portfolio :**

https://etudiant-07-portfolio.development.atelier.ovh/



## 📫 Contact

**Pélagie Aintangar**

📧 Email : [pelagie.aintangar01@gmail.com](mailto:pelagie.aintangar01@gmail.com)

💼 LinkedIn :
https://linkedin.com/in/pelagieaintangar

💻 GitHub :
https://github.com/PELAGIE-AINTANGAR

🌐 Portfolio :
https://etudiant-07-portfolio.development.atelier.ovh/


## 🎯 Objectif professionnel

Je recherche actuellement une **alternance en développement Web Full Stack**.

Je suis particulièrement intéressée par les environnements permettant de travailler sur :

* développement frontend et backend ;
* API REST ;
* bases de données ;
* Docker & Kubernetes ;
* CI/CD ;
* cloud et déploiement ;
* sécurité applicative ;
* intégration de l'IA.

📍 **Mobile dans le Sud de la France et à Paris / Île-de-France.**

⭐ Merci d'avoir visité mon repository !
