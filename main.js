function Start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MMLMA8Spb/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_R = Math.floor(Math.random()*255)+1 ;
  random_number_G = Math.floor(Math.random()*255)+1 ;
  random_number_B = Math.floor(Math.random()*255)+1 ;

 document.getElementById("result_name").innerHTML = "I can hear : "+results[0].label ;
  document.getElementById("result_confidence").innerHTML = "Accuracy : "+(results[0].confidence*100).toFixed(1)+"%" ;

  
  document.getElementById("result_name").style.color="rgb("+random_number_R+" , "+random_number_G+" , "+random_number_B+")" ;
  document.getElementById("result_confidence").style.color="rgb("+random_number_R+" , "+random_number_G+" , "+random_number_B+")" ;

  image=document.getElementById("Image") ;
  if(results[0].label == "Background Noise"){
image.src='background.jfif' ;
    }
  else if(results[0].label == "Barking"){
    image.src='dog.jpg' ;
  } 
  else if(results[0].label == "Meowing"){
      image.src='cat.jpg' ;
  }
  else if(result[0].label == "Chirping"){
    image.src='bird.jfif' ;
  }
  else{
    image.src='cow.png' ;
  }
}}