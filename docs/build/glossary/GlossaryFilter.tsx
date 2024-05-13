import definitions from './definitions.json';
import {useEffect, useState} from "react";

type Term = {
  term: string
  definition: string
  category: 'AIML' | 'Assets' | 'CS Fundamentals' | 'Pieces Specific' | 'Search'
  referencePath: string
}

const GlossaryComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState<Term['category'][]>([]);
  const [terms, setTerms] = useState<Term[]>([]);
  const [categories, setCategories] = useState<Term['category'][]>([]);

  useEffect(() => {
    setCategories(definitions.categories as Term['category'][]);
    setTerms(definitions.terms as Term[]);
    setSelectedCategories(["AIML"]);
  }, []);

  const toggleCategory = (category: Term['category']) => {
    setSelectedCategories([category]);
  };

  const filteredTerms: Term[] = selectedCategories.length === 0 ? terms : terms.filter((term: Term) => selectedCategories.includes(term.category));

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
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
      <div>
      {filteredTerms.map((term, index) => (
        <div key={index}>
            <h3>
              <a id={slugify(term.term)} href={`/build/glossary/${term.referencePath}`} rel="noopener noreferrer" className="term-anchor">
                <strong>{term.term}</strong>
              </a>
            </h3>
            {term.definition}
        </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryComponent;
