const T = require('tesseract.js');
const fs = require('fs'); 

// Define the image path and language for OCR
const imagePath = './image.jpg';
const language = 'ind';

// Define the logger function to track progress
function logProgress(event) {
    console.log(event);
  }

// Perform the OCR process
T.recognize(imagePath, language, { 
  logger: logProgress // Use the logger to track progress
})
  .then((result) => {
    // Handle the successful OCR result
    const ocrText = result.data.text;  // Extract OCR result text
    console.log('OCR Result:', ocrText);

    // Save the result to a .txt file (Notepad)
    fs.writeFile('ocr_results.txt', ocrText, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('OCR results saved to ocr_results.txt');
      }
    });
  })
  .catch((error) => {
    // Handle any errors during the OCR process
    console.error('OCR Error:', error);
  });