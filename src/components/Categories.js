import React from 'react';


const categories = [
  'Maison & Jardin', 'Beauté & Soins Personnels', 'Bébé & Enfant',
  'Cuisine & Accessoires', 'Mode & Accessoires', 'Santé & Bien-être',
  'Technologie & Électronique Écoresponsable', 'Alimentation Bio & Végane',
  'Sport & Loisirs', 'Papeterie & Bureau Écologique'
];

const Categories = ({ onSelectCategory }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className="category-item" 
          onClick={() => onSelectCategory(category)} // Appelle la fonction de sélection
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
