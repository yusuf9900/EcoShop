import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import './Panier.css';
import Footer from '../components/Footer';

function Panier({ panier, retirerDuPanier, validerCommande }) {
  // Calculer le total avec useMemo
  const total = useMemo(() => {
    return panier.reduce((acc, produit) => acc + produit.price * produit.quantity, 0);
  }, [panier]);

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
                  <article key={produit.id} className='panier-item'>
                    <img src={produit.image} alt={produit.name} className="panier-item-image" />
                    <div className='item-details'>
                      <h3>{produit.name}</h3>
                      <p className='item-price'>{produit.price}€ x {produit.quantity}</p>
                      <button onClick={() => retirerDuPanier(produit.id)}>Retirer</button>
                    </div>
                  </article>
                ))}
              </div>
              <section className='panier-total'>
                <h2>Total: {total}€</h2> {/* Afficher le total */}
              </section>
              <button onClick={handleValidation} className='btn-valider'>
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
