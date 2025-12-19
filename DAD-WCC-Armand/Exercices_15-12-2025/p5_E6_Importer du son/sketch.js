let mySound;
function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("/sond/ChestOpening.mp3");
}

function setup() {
  let cnv = createCanvas(2250, 1000);
  cnv.mousePressed(canvasPressed);

  // if (canvasPressed) {
  //   background(10);
  // } else {
  background(125);
  // }
  text("tap here to play", 1125, 500);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
