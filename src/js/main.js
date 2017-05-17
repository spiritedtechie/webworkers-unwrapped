import { applyFilter } from './filter';

let images = [];

function loadImageAndDrwaInCanvas(imageFile, canvas) {

  return new Promise((resolve, reject) => {

    const context = canvas.getContext('2d');
    const image = new Image();
    const reader = new FileReader();

    image.addEventListener("load", function() {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.drawImage(image, 0, 0);
      resolve();
    });

    reader.addEventListener("load", function () {
      image.src = reader.result;
    }, false);

    reader.readAsDataURL(imageFile);
  });
};

function handleFileSelect(evt) {

  const files = evt.target.files;
  const imagesContainers = document.getElementById('images-container');

  for(let i = 0; i < files.length; i++) {

    let file = files[i];
    let imageCanvas = document.createElement('canvas');

    images.push(imageCanvas);
    imagesContainers.appendChild(imageCanvas);
    loadImageAndDrwaInCanvas(file, imageCanvas);
  };
}

function applyFilterToAllImages() {
  images.forEach(function(imageCanvas) {
    applyFilter(imageCanvas);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('images-input').addEventListener('change', handleFileSelect, false);
  document.getElementById('images-apply-filter').addEventListener('click', applyFilterToAllImages, false);
});
