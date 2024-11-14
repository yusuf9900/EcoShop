import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Product.css';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

function Product({ ajouterAuPanier }) {
  const [productsData, setProductsData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/assets/data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => setProductsData(data.categories))
      .catch(error => setError(error.message));
  }, []);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nos produits - EcoShop</title>
        <meta name="description" content="Découvrez nos produits écologiques sur EcoShop. Achetez des articles durables et respectueux de l'environnement, disponibles dans différentes catégories." />
        <meta name="keywords" content="produits écologiques, shopping écoresponsable, produits durables, EcoShop, catégorie produits écologiques" />
        <meta property="og:title" content="Nos produits - EcoShop" />
        <meta property="og:description" content="EcoShop vous propose une large sélection de produits écologiques et durables. Explorez nos catégories et trouvez des articles respectueux de la planète." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Header Section */}
        <header className="home1">
          <div className="titre1">
            <h1>Nos produits</h1>
          </div>
        </header>

        {/* Categories Section */}
        <section className="cate">
          <Categories onSelectCategory={handleCategorySelect} />
        </section>

        {/* Error Message */}
        {error && <div className="error-message"><p>{error}</p></div>}

        {/* Product Display Section */}
        <section className='product-page'>
          {productsData
            .filter(category => selectedCategory ? category.name === selectedCategory : true)
            .map(category => (
              <section key={category.name}>
                <h2>{category.name}</h2>
                <div className="products">
                  {category.products.map(product => (
                    <article
                      key={product.id}
                      className="product-card"
                      onMouseEnter={() => handleMouseEnter(product.id)}
                      onMouseLeave={handleMouseLeave}
                      tabIndex="0" // Permet la navigation au clavier
                      aria-labelledby={`product-title-${product.id}`} // Lien entre l'image et le titre
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image" 
                        aria-hidden="true" // L'image est décorative
                      />
                      <h3 id={`product-title-${product.id}`}>{product.name}</h3>
                      {hoveredProductId === product.id && (
                        <div className="product-info" role="region" aria-live="polite">
                          <p className="product-description">{product.description}</p>
                          <p className="product-price"><strong>{product.price}€</strong></p>
                          <button 
                            className="add-to-cart" 
                            onClick={() => ajouterAuPanier(product)}
                            aria-label={`Ajouter ${product.name} au panier`}
                            style={{ backgroundColor: '#4CAF50', color: 'white' }} // Contraste
                          >
                            Ajouter au panier
                          </button>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
        </section>
      </main>

      {/* Footer Section */}
      <footer className='footer1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Product;
