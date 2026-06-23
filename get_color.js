const Jimp = require('jimp');

Jimp.read('public/LOGO.jpeg')
  .then(image => {
    const hex1 = image.getPixelColor(1, 1).toString(16).padStart(8, '0');
    const hex2 = image.getPixelColor(image.bitmap.width - 1, image.bitmap.height - 1).toString(16).padStart(8, '0');
    console.log("Top-Left Pixel Color:", hex1);
    console.log("Bottom-Right Pixel Color:", hex2);
  })
  .catch(err => {
    console.error("Error reading logo:", err);
  });
