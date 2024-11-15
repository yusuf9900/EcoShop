EcoShop - E-commerce des produits écologiques

EcoShop est une plateforme d'e-commerce dédiée à la vente de produits écologiques et durables. 
Ce projet vise à promouvoir la consommation responsable tout en offrant une interface utilisateur 
moderne et facile à utiliser. Ce document explique comment installer, utiliser et développer l'application.

Table des matières

Prérequis

Installation

Structure du projet

Utilisation

Fichier JSON des produits

Fonctionnalités principales

Contributions



Prérequis

Avant d'installer et d'utiliser l'application, vous devez vous assurer que vous avez les outils suivants installés :

Node.js (version 14 ou supérieure) - Télécharger Node.js
npm (gestionnaire de paquets pour Node.js) - Installé automatiquement avec Node.js
Git - Si vous clonez le projet depuis un dépôt distant
Un éditeur de texte ou un IDE comme Visual Studio Code
Vérifiez que vous avez Node.js et npm installés en exécutant ces commandes dans votre terminal :

bash
Copier le code
node -v
npm -v
Si elles retournent les versions de ces outils, vous êtes prêt à commencer !

Installation

1. Cloner le dépôt
Commencez par cloner le projet depuis GitHub. Ouvrez un terminal et exécutez la commande suivante pour récupérer les fichiers du projet :

bash
Copier le code
git clone https://github.com/votre-nom-utilisateur/EcoShop.git
cd EcoShop

2. Installer les dépendances

Dans le répertoire du projet, exécutez la commande suivante pour installer toutes les dépendances nécessaires avec npm :

bash
Copier le code
npm install
Cela téléchargera et installera toutes les bibliothèques nécessaires pour faire fonctionner l'application.

3. Démarrer le serveur local
   
Une fois l'installation terminée, vous pouvez démarrer l'application localement avec cette commande :

bash
Copier le code
npm start
Cela lancera un serveur local à l'adresse http://localhost:3000 dans votre navigateur. L'application sera alors accessible via cette URL.

Structure du projet
L'architecture du projet est organisée de manière à faciliter la gestion des différentes fonctionnalités, avec des composants React pour l'interface et des fichiers JSON pour stocker les produits. Voici un aperçu de la structure des dossiers du projet :

php
Copier le code
EcoShop/

│

├── src/

│   ├── assets/              # Images et autres ressources statiques

│   ├── components/          # Composants React (Cart, Product, Header, etc.)

│   ├── services/            # Services JavaScript (gestion des produits, panier)

│   ├── App.js               # Composant principal de l'application

│   ├── index.js             # Point d'entrée de l'application React

│   └── products.json        # Fichier JSON contenant les informations des produits

│
├── public/                  # Dossier public (index.html, favicon.ico, etc.)

├── package.json             # Fichier de configuration de npm

└── README.md                # Ce fichier

Utilisation

Navigation dans l'application
Page d'accueil : La page d'accueil présente une sélection de produits écologiques disponibles dans la boutique.
Page des produits : Tous les produits disponibles sont affichés. Vous pouvez ajouter des produits au panier depuis cette page.
Panier : Vous pouvez consulter les produits que vous avez ajoutés au panier, ainsi que la quantité et le prix total.
Recherche : Utilisez la barre de recherche pour filtrer les produits selon leur nom ou catégorie.

Fonctionnalités disponibles

Ajout au panier : Vous pouvez ajouter des produits au panier et voir le nombre total d'articles dans le panier.

Filtrage des produits : Utilisez la barre de recherche pour trouver rapidement un produit spécifique par nom.

Détails des produits : Chaque produit affiche son nom, prix, description et une image.

Responsive : L'application est entièrement responsive, et s'adapte aux écrans de différentes tailles (ordinateur, tablette, mobile).

Fichier JSON des produits

Structure du fichier products.json
Les produits sont stockés dans un fichier JSON local au projet, ce qui permet de simuler une API sans avoir besoin d'une base de données. Voici un exemple du contenu de ce fichier :

json
Copier le code
[
  {
    "id": 1,
    "name": "Sac en toile de jute",
    "price": 15.99,
    "description": "Un sac écologique fabriqué à partir de jute.",
    "image": "https://www.ecoshop.com/images/sac-jute.jpg"
  },
  {
    "id": 2,
    "name": "Bouteille en verre",
    "price": 12.50,
    "description": "Bouteille réutilisable en verre pour remplacer les bouteilles plastiques.",
    "image": "https://www.ecoshop.com/images/bouteille-verre.jpg"
  },
  {
    "id": 3,
    "name": "Panier en osier",
    "price": 22.75,
    "description": "Panier fabriqué à la main avec des matériaux écologiques.",
    "image": "https://www.ecoshop.com/images/panier-osier.jpg"
  }
]

Chargement des produits dans l'application

Les produits sont récupérés et affichés dans l'application via une fonction JavaScript. Voici un exemple de code qui charge les produits à partir du fichier JSON et les affiche :

productService.js (dans src/services)
javascript
Copier le code
import productsData from '../products.json';

export const getProducts = () => {
  return productsData;
};

Utilisation des produits dans un composant React (exemple dans ProductList.js)

javascript
Copier le code
import React from 'react';
import { getProducts } from '../services/productService';

const ProductList = () => {
  const products = getProducts();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price} €</p>
          <button>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

Fonctionnalité de recherche

La barre de recherche permet de filtrer les produits en fonction de leur nom ou description. Voici un exemple de la mise en place de cette fonctionnalité :

SearchBar.js
javascript
Copier le code
import React, { useState } from 'react';
import { getProducts } from '../services/productService';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const products = getProducts();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
Contributions
Nous encourageons la communauté à contribuer au projet pour améliorer ses fonctionnalités. Si vous souhaitez ajouter une nouvelle fonctionnalité ou corriger un bogue, suivez les étapes ci-dessous :


Fork le projet depuis GitHub.

Créez une nouvelle branche pour votre fonctionnalité ou correction (git checkout -b feature/nom-de-la-feature).

Effectuez vos modifications et commitez-les (git commit -am 'Ajout d'une fonctionnalité').

Poussez vos modifications sur votre fork (git push origin feature/nom-de-la-feature).

Créez une pull request pour proposer vos changements.

