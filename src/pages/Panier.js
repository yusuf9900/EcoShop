import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import './Panier.css';
import Footer from '../components/Footer';

function Panier({ panier, retirerDuPanier, validerCommande }) {
  const total = useMemo(() => panier.reduce((acc, produit) => acc + produit.price, 0), [panier]);

  const handleValidation = () => {
    if (panier.length === 0) {
      alert("Votre panier est vide !");
    } else {
      validerCommande(panier);
    }
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Votre Panier - EcoShop</title>
        <meta name="description" content="Consultez votre panier et validez votre commande sur EcoShop. Achetez des produits écologiques et durables facilement." />
        <meta name="keywords" content="panier, commande, EcoShop, produits écologiques, achat en ligne" />
        <meta property="og:title" content="Votre Panier - EcoShop" />
        <meta property="og:description" content="Découvrez les produits ajoutés à votre panier sur EcoShop. Validez votre commande pour recevoir des articles respectueux de l'environnement." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Panier Header Section */}
        <header className='panier-container'>
          <h1>Votre Panier</h1>
          {panier.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <section>
              <div className='panier-items'>
                {panier.map((produit) => (
                  <article key={produit.id} className='panier-item' tabIndex="0" aria-labelledby={`panier-item-${produit.id}`}>
                    <img 
                      src={produit.image} 
                      alt={produit.name} 
                      className="panier-item-image" 
                      aria-hidden="true" // L'image est décorative
                    />
                    <div className='item-details'>
                      <h3 id={`panier-item-${produit.id}`}>{produit.name}</h3>
                      <p className='item-price'>{produit.price}€</p>
                      <button 
                        onClick={() => retirerDuPanier(produit.id)} 
                        aria-label={`Retirer ${produit.name} du panier`}
                        style={{ backgroundColor: '#FF6347', color: 'white' }} // Contraste amélioré
                      >
                        Retirer
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              <section className='panier-total'>
                <h2>Total: {total}€</h2>
              </section>
              <button 
                onClick={handleValidation} 
                className='btn-valider'
                aria-label="Valider la commande"
                style={{ backgroundColor: '#4CAF50', color: 'white' }} // Contraste amélioré
              >
                Valider la commande
              </button>
            </section>
          )}
        </header>
      </main>

      {/* Footer Section */}
      <footer className='footer1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Panier;
