const fs = require('fs');
const path = require('path');

const definitionsPath = './definitions.json';
const jsonData = require(definitionsPath);
const { terms } = jsonData;

const basePath = 'terms';

const generateSlug = (title) => {
  const titleWithoutParentheses = title.replace(/\s*\(.*?\)\s*/g, '');
  return titleWithoutParentheses.toLowerCase().replace(/ /g, '-');
};

const updatedTerms = terms.map(term => {
  const slug = generateSlug(term.term);
  const referencePath = path.join(basePath, `${term.category}/${slug}`);
  return { ...term, referencePath };
});

jsonData.terms = updatedTerms;

fs.writeFileSync(definitionsPath, JSON.stringify(jsonData, null, 2));

console.log('Updated definitions-old.json with reference paths.');
