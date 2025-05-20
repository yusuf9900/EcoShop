import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ nombreProduits }) {  // La prop 'nombreProduits' est reçue pour afficher le nombre de produits dans le panier
  const [scrolled, setScrolled] = useState(false);  // État pour gérer le défilement de la page
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Rediriger vers la page des produits avec le paramètre de recherche
      navigate(`/product?search=${encodeURIComponent(searchQuery.trim())}`);
      // Réinitialiser la barre de recherche
      setSearchQuery('');
    }
  };

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>  {/* Applique la classe 'scrolled' si l'utilisateur a défilé */}
      <div className="logo">
        <Link to="/"><img src="/assets/images/e.png" alt="Logo EcoShop" /></Link>  {/* Lien vers la page d'accueil avec le logo */}
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
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Recherchez un produit..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
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

