import React, { useState, useEffect } from 'react';
import '../pages/Product.css'; // Importation du fichier CSS pour le style

const Home = ({ ajouterAuPanier }) => {  // La prop 'ajouterAuPanier' permet d'ajouter un produit au panier
  const [products, setProducts] = useState([]);  // État local pour stocker les produits récupérés

  useEffect(() => {
    // Utilisation de useEffect pour récupérer les produits depuis un fichier JSON
    fetch('/assets/data/products.json')
      .then(response => response.json())  // Conversion de la réponse en JSON
      .then(data => {
        // Aplatissement des produits à partir des différentes catégories
        const allProducts = data.categories.flatMap(category => category.products);
        const randomProducts = [];
        
        // Sélectionner 9 produits au hasard
        for (let i = 0; i < 9; i++) {
          const randomIndex = Math.floor(Math.random() * allProducts.length);  // Sélection aléatoire
          randomProducts.push(allProducts[randomIndex]);  // Ajout du produit sélectionné
          allProducts.splice(randomIndex, 1);  // Retirer ce produit de la liste pour éviter les doublons
        }

        setProducts(randomProducts);  // Mise à jour de l'état avec les produits sélectionnés
      })
      .catch(error => {
        console.error('Erreur lors du chargement des produits:', error);  // Gestion des erreurs
      });
  }, []);  // Le tableau vide [] signifie que l'effet ne se lance qu'une fois lors du montage du composant

  // Si aucun produit n'est chargé, afficher "Chargement..."
  if (!products.length) {
    return <p>Chargement...</p>;
  }

  return (
    <div className='product-page'> {/* Utilisation de la classe CSS pour le style de la page */}
      <h2>Produits Populaires</h2>
      <div className="products"> {/* Conteneur pour la grille de produits */}
        {products.map(product => (
          <div key={product.id} className="product-card"> {/* Carte produit */}
            <img src={product.image} alt={product.name} /> {/* Affichage de l'image du produit */}
            <h3>{product.name}</h3> {/* Affichage du nom du produit */}
            <div className="product-info"> {/* Conteneur d'information du produit */}
              <p className="product-description">{product.description}</p>  {/* Description du produit */}
              <p className="product-price"><strong>{product.price} €</strong></p>  {/* Prix du produit */}
              <button 
                className="add-to-cart" 
                onClick={() => ajouterAuPanier(product)}  // Appel de la fonction 'ajouterAuPanier' pour ajouter ce produit au panier
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

