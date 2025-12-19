/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates drawing skeletons on poses for the MoveNet model.
 */

let video;
let bodyPose;
let poses = [];
let connections;
let img;

function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
  img = loadImage("/img/GangleMask.png");
}

function setup() {
  createCanvas(1333.333, 1000);

  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(1333.333, 1000);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
  // Get the skeleton connection information
  connections = bodyPose.getSkeleton();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw the skeleton connections
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = pose.keypoints[pointAIndex];
      let pointB = pose.keypoints[pointBIndex];
      // Only draw a line if both points are confident enough
      if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
        stroke(255, 0, 0);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
  }

  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        // j=0 : nez
        // j=1 : oeil gauche
        // j=2 : oeil droit
        // j=3 : oreille gauche
        // j=4 : oreille droite
        // etc.

        if (j == 0) {
          fill(255, 0, 255);
          let w = img.width / 4.5;
          let h = img.height / 4.5;

          let angle = (frameCount * TWO_PI) / (4.5 * 45);

          push();
          translate(keypoint.x, keypoint.y);
          rotate(angle);
          imageMode(CENTER);
          image(img, 0, 0, w, h);
          pop();
        } else {
          fill(0, 255, 0);
        }
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
  }
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}
