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
    if (produit && produit.id) {
      setPanier((prevPanier) => [...prevPanier, produit]);
    } else {
      console.error("Produit invalide :", produit);
    }
  };

  const retirerDuPanier = (id) => {
    setPanier((prevPanier) => prevPanier.filter((produit) => produit.id !== id));
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
