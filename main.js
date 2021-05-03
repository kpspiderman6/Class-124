function setup(){
    canvas = createCanvas(450, 450);
    canvas.position(50,200);
    video=createCapture(VIDEO);
    video.size(500,320);
    video.position(700,200);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialised");
}
function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);

    }
}

