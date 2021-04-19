const fs = require('fs');
const filePath = process.argv[2] === undefined ? __dirname : process.argv[2];
  
fs.readdir(filePath, (err, files) => {
  if (err)  
    console.log(err);
  else {
    files.forEach(file => {
        const isDirectory = fs.statSync(`${filePath}/${file}`).isDirectory();
        isDirectory ? console.log(`${file}/`) : console.log(`file: ${file}`);
    })
  }
})