const fs = require('fs');
['index.html', 'README.md'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const replaced = content.replace(/assets(\/)?/g, 'imagens$1');
  fs.writeFileSync(file, replaced);
  console.log('Fixed', file);
});