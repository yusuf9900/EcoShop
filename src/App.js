import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Panier from './pages/Panier';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import OtherNavBar from './components/OtherNavBar';
import './App.css';

function App() {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => {
      // Vérifier si le produit existe déjà dans le panier
      const produitExistant = prevPanier.find((p) => p.id === produit.id);
  
      if (produitExistant) {
        // Si le produit existe, augmenter sa quantité
        return prevPanier.map((p) =>
          p.id === produit.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // Sinon, ajouter le produit avec une quantité de 1
        return [...prevPanier, { ...produit, quantity: 1 }];
      }
    });
  };
  

  const retirerDuPanier = (id) => {
    setPanier((prevPanier) => {
      return prevPanier
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0); // Supprimer les produits avec une quantité de 0
    });
  };
  
  
  const validerCommande = (panier) => {
    console.log("Commande validée :", panier);
    setPanier([]); // Réinitialisation du panier après validation
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <NavBar nombreProduits={panier.length} />
              <Home ajouterAuPanier={ajouterAuPanier}/>
            </>
          } />
          <Route path="/product" element={
            <>
              <OtherNavBar nombreProduits={panier.length} />
              <Product ajouterAuPanier={ajouterAuPanier} />
            </>
          } />
          <Route path="/panier" element={
            <>
              <OtherNavBar nombreProduits={panier.length} />
              <Panier 
                panier={panier} 
                retirerDuPanier={retirerDuPanier} 
                validerCommande={validerCommande} 
              />
            </>
          } />
          <Route path="/contact" element={
            <>
              <OtherNavBar nombreProduits={panier.length} />
              <Contact />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
