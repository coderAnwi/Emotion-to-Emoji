Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById('camera');

Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function(data_uri){
       document.getElementById('result').innerHTML=
       "<img id='cap_img' src='"+data_uri+"'>"
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('model.json',modelLoaded);
function modelLoaded() {
   console.log('Model Loaded!');

}

function speak() {
    var synth = window.speechSynthesis;
    sd_1 = "The First Prediction is " + prediction_1;
    sd_2 = "The Second Prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(sd_1 + sd_2);
    synth.speak(utterThis);
}