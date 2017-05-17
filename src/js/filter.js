const applyFilter = (canvas) => {
  console.log("Applying filter to canvas");
  console.dir(canvas);
  Caman(canvas, function() {
    this.brightness(45);
    this.vibrance(20);
    this.hue(45);
    this.gamma(3);
    this.clip(35);
    this.stackBlur(0);
    this.contrast(-5);
    this.saturation(0);
    this.exposure(0);
    this.sepia(70);
    this.noise(0);
    this.sharpen(2);
    this.render();
  });
}

module.exports = { applyFilter };
