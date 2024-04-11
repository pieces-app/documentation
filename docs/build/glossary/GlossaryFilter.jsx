import React, { useState, useEffect } from 'react';
import definitions from './definitions.json'; 


const GlossaryComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  
    setCategories(definitions.categories);
    setTerms(definitions.terms);
    setSelectedCategories(definitions.categories);
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories([category]);
  };

  const filteredTerms = selectedCategories.length === 0 ? terms : terms.filter(term => selectedCategories.includes(term.category));

  const slugify = (text) => {
    if (typeof text !== 'string') {
      console.warn('slugify was called with a non-string argument', text);
      return '';
    }
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  
  const getFirstLine = (text) => {
    return text.split('.', 1)[0];
  };

  return (
    <div className="glossary-container">
      <div className="category-filters">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`category ${selectedCategories.includes(category) ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <ul className="term-list">
      {filteredTerms.map((term, index) => (
  <li key={index} className="term">
    {/* Updated to navigate on the same page */}
    <a id={slugify(term.term)} href={term.referencePath} rel="noopener noreferrer" className="term-anchor">
      <strong>{term.term}</strong>
    </a>
    : {getFirstLine(term.definition)}
  </li>
))}
      </ul>
    </div>
  );
};

export default GlossaryComponent;