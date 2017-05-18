importScripts("filter.js")

self.addEventListener("message", function(evt) {
  let { imageId, imageData, width, height} = evt.data;
  applyFilter(imageData.data, width, height);
  self.postMessage({imageId, imageData});
}, false)
