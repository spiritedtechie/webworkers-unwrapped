import {
  applyFilter
} from './filter';

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

    reader.addEventListener("load", function() {
      image.src = reader.result;
    }, false);

    reader.readAsDataURL(imageFile);
  });
};

function handleFileSelect(evt) {

  const files = evt.target.files;
  const imagesContainers = document.getElementById('images-container');

  for (let i = 0; i < files.length; i++) {

    let file = files[i];
    let container = document.createElement('div');
    let imageCanvas = document.createElement('canvas');
    let footerSpan = document.createElement('span');
    let hideButton = document.createElement('input');
    hideButton.type = "button"
    hideButton.value = "Hide"
    hideButton.addEventListener('click', (evt) => {
      container.style.display = "none";
    });

    footerSpan.appendChild(hideButton);
    container.appendChild(imageCanvas);
    container.appendChild(footerSpan);

    imagesContainers.appendChild(container);
    images.push(container);

    loadImageAndDrwaInCanvas(file, container);
  };
}

function applyFilterToAllImages() {
  images.forEach(function(image) {

    const canvas = image.firstChild;
    const context = canvas.getContext("2d");
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    applyFilter(imageData.data, canvas.width, canvas.height);
    context.putImageData(imageData, 0, 0);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('images-input').addEventListener('change', handleFileSelect, false);
  document.getElementById('images-apply-filter').addEventListener('click', applyFilterToAllImages, false);
});
