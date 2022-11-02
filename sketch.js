// code adopted from 
//+ daniel shiffman mirror code

var video;
//25 for mobile
// var pscale = 25;

//8-10 for desktop
var pscale =15;

function setup() {
createCanvas(windowWidth, windowHeight);
  pixelDensity(3);
  frameRate(10);
  video = createCapture(VIDEO);
  video.size(width / pscale, height / pscale);
}

function draw() {
  background(255);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      if (isNaN(bright)) bright = 0;
      var w = Math.floor(map(bright, 0, 255, 0, 8));
      noStroke();
      fill(255);
      rectMode(CENTER);

      // select image from images array
      var assets_array = [img01, img02, img03, img04, img05, img06, img07, img08, img09];
      var asset = assets_array[w];
      var size = w * 2
      image(asset, x * pscale, y * pscale, pscale, pscale);
    }
  }

}