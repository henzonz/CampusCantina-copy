/* Image processing for image upload */

const fs = require('fs');
const sharp = require('sharp');

const imageProcessor = async (req, destFilePath) => {
  fs.access(destFilePath, (err) => {
    if (err) {
      fs.mkdirSync(destFilePath);
    }
  });

  try {
    await sharp(req.file.buffer)
      .resize({ width: 1920, height: 400, fit: 'cover' })
      .jpeg({ quality: 100 })
      .toFile(destFilePath + '/Display_Pic_Banner.jpeg');

    await sharp(req.file.buffer)
      .resize({ width: 350, height: 250, fit: 'fill' })
      .jpeg({ quality: 100 })
      .toFile(destFilePath + '/Display_Pic_Thumbnail.jpeg');
  } catch (err) {
    console.log('Error while Processing Image: ' + err);
  }
};

module.exports = imageProcessor;
