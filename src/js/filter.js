const applyFilter = (imageData, width, height) => {

  return new Promise(function(resolve) {

    for (let y = 0; y < height; y++) {

      let inPos = y * width * 4;
      let outPos = inPos;
      let r, g, b, a;

      for (let x = 0; x < width; x++) {
        r = Math.abs( 255 * Math.cos( imageData[inPos++] ));
        g = 255 - imageData[inPos++];
        b = 255 - imageData[inPos++];
        a = Math.abs( 255 * Math.cos( imageData[inPos++] ));

        imageData[outPos++] = r;
        imageData[outPos++] = g;
        imageData[outPos++] = b;
        imageData[outPos++] = a;
      }
    }

    resolve();
  });
}

export {
  applyFilter
};
