import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';

const Contact = () => {
  // Déclaration de l'état du formulaire (name, email, message) et des erreurs
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});  // État pour stocker les erreurs de validation

  // Fonction pour valider le formulaire
  const validateForm = () => {
    const newErrors = {};  // Objet pour stocker les erreurs
    if (!formData.name) newErrors.name = 'Nom requis';  // Vérifie si le nom est vide
    if (!formData.email) {
      newErrors.email = 'Email requis';  // Vérifie si l'email est vide
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {  // Vérifie si l'email est valide
      newErrors.email = 'Email invalide';
    }
    if (!formData.message) newErrors.message = 'Message requis';  // Vérifie si le message est vide
    return newErrors;  // Retourne les erreurs trouvées
  };

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;  // Récupère le nom et la valeur du champ modifié
    setFormData({ ...formData, [name]: value });  // Met à jour l'état formData avec la nouvelle valeur
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut (rechargement de la page)
    const formErrors = validateForm();  // Valide le formulaire
    if (Object.keys(formErrors).length === 0) {  // Si aucune erreur n'est trouvée
      console.log('Formulaire soumis:', formData);  // Affiche les données du formulaire dans la console
      setFormData({ name: '', email: '', message: '' });  // Réinitialise le formulaire après la soumission
    } else {
      setErrors(formErrors);  // Met à jour les erreurs dans l'état
    }
  };

  return (
    <div className="contact-page">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contactez-nous - EcoShop</title>
        <meta name="description" content="Contactez EcoShop pour toute question ou demande. Trouvez notre adresse et envoyez-nous un message." />
        <meta name="keywords" content="contact, EcoShop, nous joindre, adresse, message" />
        <meta property="og:title" content="Contactez-nous - EcoShop" />
        <meta property="og:description" content="Envoyez-nous un message via notre formulaire de contact ou trouvez notre localisation sur la carte." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Contact Form Section */}
        <section>
          <h2>Contactez-nous</h2>
          <form onSubmit={handleSubmit} aria-labelledby="contact-form">
            <div className="form-group">
              <label htmlFor="name" id="name-label">Nom :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                aria-describedby="name-error" 
              />
              {errors.name && <p id="name-error" className="error" role="alert">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email" id="email-label">Email :</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                aria-describedby="email-error"
              />
              {errors.email && <p id="email-error" className="error" role="alert">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message" id="message-label">Message :</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                aria-describedby="message-error"
              />
              {errors.message && <p id="message-error" className="error" role="alert">{errors.message}</p>}
            </div>

            <button type="submit" aria-label="Envoyer le message">Envoyer</button>
          </form>
        </section>

        {/* Map Section */}
        <section>
          <h2>Notre localisation</h2>
          <div className='map'>
            <MapComponent />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className='footer2'>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
