// MapComponent.js
import React from 'react';

const MapComponent = () => {
  return (
    // Conteneur avec une classe CSS pour rendre la carte responsive (aspect ratio 21:9)
    <div className="embed-responsive embed-responsive-21by9">
      {/* Intégration d'une carte Google Maps à l'aide d'un iframe */}
      <iframe 
        // URL de l'iframe avec les paramètres de la carte (ici, la localisation de Hollywood, Los Angeles)
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd" 
        width="600"  // Largeur de l'iframe
        height="450"  // Hauteur de l'iframe
        frameBorder="0"  // Pas de bordure autour de l'iframe
        style={{ border: 0 }}  // Suppression du style de bordure
        allowFullScreen  // Permet de passer en mode plein écran
        className="embed-responsive-item"  // Classe CSS pour l'intégration responsive
      >
      </iframe>
    </div>
  );
};

export default MapComponent;  // Exportation du composant MapComponent pour l'utiliser ailleurs
