song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristX = 0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("Voice 001.mp3"); 
}
function setup(){
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modeLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 450, 400);
}
function modeLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);
    }
}