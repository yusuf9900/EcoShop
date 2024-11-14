import React from 'react';
// Importation des icônes des réseaux sociaux depuis 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section "À propos de nous" */}
      <div className="footer-section">
        <h3>À propos de nous</h3>
        <p>
          EcoShop est une plateforme d'e-commerce dédiée aux produits écologiques et responsables. 
          Nous offrons une large gamme de produits durables pour un mode de vie plus respectueux de l'environnement.
        </p>
      </div>

      {/* Section "Contactez-nous" */}
      <div className="footer-section">
        <h3>Contactez-nous</h3>
        <p>Email : support@ecoshop.com</p> {/* Email de contact */}
        <p>Téléphone : +123 456 789</p> {/* Numéro de téléphone */}
      </div>

      {/* Section "Abonnez-vous à notre newsletter" */}
      <div className="footer-section">
        <h3>Abonnez-vous à notre newsletter</h3>
        <p>Recevez les dernières nouvelles et offres spéciales directement dans votre boîte de réception.</p>
        <input type="email" placeholder="Votre email" /> {/* Champ de saisie pour l'email */}
        <button>Abonnez-vous</button> {/* Bouton pour envoyer l'email */}
      </div>

      {/* Section "Suivez-nous" avec les icônes des réseaux sociaux */}
      <div className="footer-section">
        <h3>Suivez-nous</h3>
        <div className="social-icons">
          {/* Liens vers les réseaux sociaux avec des icônes cliquables */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> {/* Icône Facebook */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> {/* Icône Twitter */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> {/* Icône Instagram */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> {/* Icône LinkedIn */}
          </a>
        </div>
      </div>

      {/* Section "footer-bottom" pour le texte de droits d'auteur */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoShop. Tous droits réservés.</p> {/* Affiche l'année actuelle dynamique */}
      </div>
    </footer>
  );
}

export default Footer;  // Exportation du composant Footer pour l'utiliser ailleurs
