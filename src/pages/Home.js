import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import RandomProducts from '../components/RandomProducts';

const categories = [
  'Maison & Jardin', 'Beauté & Soins Personnels', 'Bébé & Enfant',
  'Cuisine & Accessoires', 'Mode & Accessoires', 'Santé & Bien-être',
  'Technologie & Électronique Écoresponsable', 'Alimentation Bio & Végane',
  'Sport & Loisirs', 'Papeterie & Bureau Écologique'
];

const CategoriesComponent = ({ onSelectCategory }) => {
  return (
    <div className="categories-container" role="region" aria-labelledby="categories-section">
      <h2 id="categories-section" className="sr-only">Catégories</h2> {/* Amélioration de l'accessibilité */}
      {categories.map((category, index) => (
        <button 
          key={index} 
          className="category-item" 
          onClick={() => onSelectCategory(category)}
          aria-label={`Voir les produits de la catégorie ${category}`}  
        >{/* ARIA label pour la catégorie */}
          {category}
        </button>
      ))}
    </div>
  );
};

function Home({ ajouterAuPanier }) {
  const onSelectCategory = (category) => {
      console.log('Catégorie sélectionnée:', category);
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Accueil - EcoShop</title>
        <meta name="description" content="Découvrez des produits écologiques et durables sur EcoShop. Consommez autrement et respectez la planète avec nos produits écoresponsables." />
        <meta name="keywords" content="produits écologiques, produits durables, shopping écoresponsable, mode de vie durable, EcoShop" />
        <meta property="og:title" content="Accueil - EcoShop" />
        <meta property="og:description" content="EcoShop propose des produits écologiques pour un mode de vie plus durable. Explorez nos catégories et achetez responsable." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <header className="home" role="banner">
          <h1 className="title-1">EcoShop : Consommez autrement, respectez la planète !</h1>
          <p className="para-1">Découvrez des produits écoresponsables pour un mode de vie plus durable.</p>
          <div className="content">
            <Link to="/product" className="cta-button" role="button" aria-label="Voir nos produits">Voir nos produits</Link>
            <Link to="/contact" className="ctb-button" role="button" aria-label="Contactez-nous">Contactez-nous</Link>
          </div>
        </header>

        {/* Information Section */}
        <section className="info-section" aria-labelledby="info-section-title">
          <div className="info-item">
            <img src="/assets/images/1.svg" alt="Livraison Gratuite" className="info-icon" />
            <h3>Livraison Gratuite</h3>
            <p>Sur toutes les commandes au-dessus de 50 €</p>
          </div>
          <div className="info-item">
            <img src="/assets/images/2.svg" alt="Support 24/7" className="info-icon" />
            <h3>Support 24/7</h3>
            <p>Disponible à tout moment pour vos questions</p>
          </div>
          <div className="info-item">
            <img src="/assets/images/3.svg" alt="Remboursement" className="info-icon" />
            <h3>Remboursement</h3>
            <p>Garantie de remboursement de 30 jours</p>
          </div>
        </section>

        {/* Banner Section */}
        <section className="banner" aria-labelledby="banner-section">
          <h1 id="banner-section" className="sr-only">Bienvenue sur EcoShop</h1>
          <p>Découvrez nos produits écologiques et durables !</p>
        </section>

        {/* Categories Section */}
        <section className="categories">
          <CategoriesComponent onSelectCategory={onSelectCategory} />
        </section>

        {/* Popular Products Section */}
        <section className="popular-products">
          <RandomProducts ajouterAuPanier={ajouterAuPanier} /> {/* Passer la fonction ici */}
        </section>
      </main>

      {/* Footer Section */}
      <section className="footer1">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
