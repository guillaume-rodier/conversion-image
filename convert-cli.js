#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { program } = require('commander');

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.gif', '.avif'];

function getImageFilesFromFolder(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => path.join(folderPath, file));
}

program
  .name('convert-image')
  .description('Convertit des images sans compression ni redimensionnement')
  .option('-i, --input <paths...>', 'Chemin(s) des fichiers image source')
  .option('-d, --directory <folder>', 'Dossier contenant des images à convertir')
  .requiredOption('-f, --format <type>', 'Format de sortie (ex: jpeg, png, webp, avif)')
  .option('-o, --output <directory>', 'Dossier de sortie', 'output');

program.parse();
const options = program.opts();

// Créer dossier de sortie si nécessaire
if (!fs.existsSync(options.output)) {
  fs.mkdirSync(options.output, { recursive: true });
}

let filesToConvert = [];

if (options.input) {
  filesToConvert.push(...options.input);
}

if (options.directory) {
  const filesInDir = getImageFilesFromFolder(options.directory);
  filesToConvert.push(...filesInDir);
}

if (filesToConvert.length === 0) {
  console.error('❌ Aucun fichier à convertir. Utilisez --input ou --directory.');
  process.exit(1);
}

// Traitement sans compression ni redimensionnement
filesToConvert.forEach((inputPath) => {
  const inputExt = path.extname(inputPath);
  const inputName = path.basename(inputPath, inputExt);
  const outputPath = path.join(options.output, `${inputName}.${options.format}`);

  sharp(inputPath)
    .toFormat(options.format) // sans options = pas de compression
    .toFile(outputPath)
    .then(() => {
      console.log(`✅ ${path.basename(inputPath)} → ${outputPath}`);
    })
    .catch(err => {
      console.error(`❌ Erreur avec ${inputPath} : ${err.message}`);
    });
});
