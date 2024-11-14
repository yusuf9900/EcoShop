import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ nombreProduits }) {  // La prop 'nombreProduits' est reçue pour afficher le nombre de produits dans le panier
  const [scrolled, setScrolled] = useState(false);  // État pour gérer le défilement de la page

  // Fonction de gestion du défilement pour ajouter ou enlever la classe 'scrolled'
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);  // Si l'utilisateur défile de plus de 20px, on change l'état
  };

  useEffect(() => {
    // Ajout d'un écouteur d'événements pour détecter le défilement
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Nettoyage de l'écouteur lors du démontage du composant
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  // Le tableau vide indique que l'effet ne se déclenche qu'une seule fois (au montage)

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>  {/* Applique la classe 'scrolled' si l'utilisateur a défilé */}
      <div className="logo">
        <a href="/"><img src="/assets/images/e.png" alt="Logo EcoShop" /></a>  {/* Lien vers la page d'accueil avec le logo */}
      </div>
      <nav>
        <div className="main-nav">
          <ul>
            {/* Liens de navigation vers les pages principales */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Produits</Link></li>
            <li><Link to="/panier">Panier</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="search-bar">
        {/* Barre de recherche pour trouver des produits */}
        <input 
          type="text" 
          placeholder="Recherchez un produit..." 
        />
        <button>Rechercher</button>
      </div>
      <div className="cart">
        {/* Lien vers la page du panier avec un indicateur du nombre de produits */}
        <Link to="/panier" className="cart-btn">  {/* Utilisation de 'Link' pour la navigation sans rechargement de la page */}
          <img src="/assets/images/panier.svg" alt="Panier" className="cart-icon" />  {/* Icône du panier */}
          <span className="cart-count">{nombreProduits}</span>  {/* Affichage dynamique du nombre de produits dans le panier */}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;  // Exportation du composant NavBar pour l'utiliser ailleurs