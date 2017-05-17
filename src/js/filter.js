const applyFilter = (canvas) => {
  console.log("Applying filter to canvas");
  console.dir(canvas);
  Caman(canvas, function() {
    this.brightness(10);
    this.contrast(20);
    this.render();
  });
}

module.exports = { applyFilter };
