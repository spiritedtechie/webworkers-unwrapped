import { applyFilter } from './filter';

let images = [];

function loadImageAndDrwaInCanvas(imageFile, imagesContainer) {

  return new Promise((resolve, reject) => {

    const canvas = imagesContainer.firstChild;
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
    let container = document.createElement('div');
    let imageCanvas = document.createElement('canvas');
    let loadingSpan = document.createElement('span');

    container.appendChild(imageCanvas);
    container.appendChild(loadingSpan);

    imagesContainers.appendChild(container);
    images.push(container);

    loadImageAndDrwaInCanvas(file, container);
  };
}

function applyFilterToAllImages() {
  images.forEach(function(image) {
    console.dir(image);
    applyFilter(image.firstChild);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('images-input').addEventListener('change', handleFileSelect, false);
  document.getElementById('images-apply-filter').addEventListener('click', applyFilterToAllImages, false);
});
