const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../docs/build/glossary');
let pages = [];

const getFiles = function(dirPath) {
  fs.readdirSync(dirPath).forEach(function(file) {
    let filePath = path.join(dirPath, file);
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath);
    } else {
      // Assuming you want to include all HTML files, adjust the condition as needed
      if (path.extname(file) === '.md' || path.extname(file) === '.mdx') {
        console.log('filePath', filePath)
        // Adjust the path format to match your requirements
        let formattedPath = filePath.replace(directoryPath, '').replace('.mdx', '').replace('.md', '');
        console.log('formattedPath', formattedPath)
        pages.push({
          path: formattedPath.startsWith('/') ? formattedPath : '/' + formattedPath, // Ensure the path starts with '/'
          name:  formattedPath.slice(1).replace('/', '-')
        });
      }
    }
  });
};

getFiles(directoryPath);

// Convert the pagesObject to JSON and save it
fs.writeFileSync('static/lost-pixel.json', JSON.stringify(pages, null, 2), 'utf8');
