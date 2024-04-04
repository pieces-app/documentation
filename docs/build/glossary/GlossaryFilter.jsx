import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

const categoryToMDXPath = {
  "AIML": () => import('./terms/AIML.mdx'),
  "Assets": () => import('./terms/Assets.mdx'),
  "CS Fundamentals": () => import('./terms/CSFundamentals.mdx'),
  "Pieces Specific": () => import('./terms/PiecesSpecific.mdx'),
  "Search": () => import('./terms/Search.mdx')
};

const GlossaryComponent = () => {
    const allCategories = Object.keys(categoryToMDXPath);
    const [selectedCategories, setSelectedCategories] = useState(allCategories);
    const [MdxContent, setMdxContent] = useState([]);
  
    useEffect(() => {
      const loadMDXContent = async () => {
        const contentPromises = selectedCategories
          .map(category => {
            const loadFunction = categoryToMDXPath[category];
            return loadFunction ? loadFunction().then(mod => ({ category, content: mod.default })) : null;
          })
          .filter(Boolean);
  
        Promise.all(contentPromises).then(loadedContents => {
          
          const sortedContents = allCategories
            .filter(category => selectedCategories.includes(category)) 
            .map(category => loadedContents.find(content => content.category === category).content);
          setMdxContent(sortedContents);
        });
      };
  
      loadMDXContent();
    }, [selectedCategories]);
  
    const toggleCategory = (category) => {
      setSelectedCategories([category]);
    };
  
    return (
      <div className="glossary-container">
        <div className="category-filters">
          {allCategories.map((category, index) => (
            <span
              key={index}
              className={`category ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="term-content">
          {MdxContent.length > 0 ? (
            <MDXProvider>
              {MdxContent.map((Content, index) => <Content key={index} />)}
            </MDXProvider>
          ) : (
            <p>Select a category to view terms.</p>
          )}
        </div>
      </div>
    );
  };

export default GlossaryComponent;