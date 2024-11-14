// src/pages/NotFound.js
import React from 'react';  // Importation de React pour créer le composant

function NotFound() {  // Définition du composant fonctionnel NotFound
    return (
        <div>  {/* Conteneur principal du composant */}
            <h2>404 - Page Not Found</h2>  {/* Titre principal indiquant l'erreur 404 */}
            <p>Désolé, la page que vous recherchez n'existe pas.</p>  {/* Message d'erreur expliquant que la page n'a pas été trouvée */}
        </div>
    );
}

export default NotFound;  // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
