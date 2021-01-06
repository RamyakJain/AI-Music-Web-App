song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristX = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song1_status= "";
song2_status= "";
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
    song1_status = song1.isPlaying();
    fill(250, 0, 0);
    stroke(255, 0, 0);
    if (scoreleftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1_status == "false"){
            song1.play();
            document.getElementById("song_name").innerHTML = "Playing Harry Potter Theme Song";
        }
    }
    song2_status = song2.isPlaying();
    if (scorerightWrist > 0.2){
        circle(rightWristX, rightWristY,20);
        song1.stop();
        if (song2_status == "false"){
            song2.play();
            document.getElementById("song_name").innerHTML = "Playing A Moment Apart";
        }
    
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
        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;
    }
}