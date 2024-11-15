import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ nombreProduits }) {  // Prop 'nombreProduits' passée pour afficher le nombre de produits dans le panier

  return (
    // Conteneur principal de la barre de navigation
    <div className='conter'>  {/* Attention : il semble y avoir une faute de frappe ici, 'conter' pourrait être 'container' */}
      <div className="contaner">  {/* Attention : 'contaner' devrait être 'container' */}
        {/* Section du logo */}
        <div className="logoo">  {/* Faute de frappe, 'logoo' pourrait être 'logo' */}
          <a href="/"><img src="/assets/images/e.png" alt="Logo EcoShop" /></a>  {/* Lien vers la page d'accueil avec l'image du logo */}
        </div>

        {/* Section de navigation principale */}
        <nav>
          <div className="main-navi">  {/* Faute de frappe, 'main-navi' pourrait être 'main-nav' */}
            <ul>
              {/* Liens de navigation */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Produits</Link></li>
              <li><Link to="/panier">Panier</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Section de la barre de recherche */}
        <div className="search-barr">  {/* Faute de frappe, 'search-barr' pourrait être 'search-bar' */}
          <input 
            type="text" 
            placeholder="Recherchez un produit..."  
          />{/* Placeholder pour la barre de recherche */}
          <button>Rechercher</button>  {/* Bouton pour soumettre la recherche */}
        </div>

        {/* Section du panier */}
        <div className="cartt">  {/* Faute de frappe, 'cartt' pourrait être 'cart' */}
          <Link to="/panier" className="cart-btn">  {/* Utilisation de 'Link' pour la navigation sans rechargement */}
            <img src="/assets/images/panier.svg" alt="Panier" className="cart-icon" />  {/* Icône représentant le panier */}
            <span className="cart-countt">{nombreProduits}</span>  {/* Affichage dynamique du nombre de produits dans le panier */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;  // Exportation du composant NavBar pour pouvoir l'utiliser ailleurs

