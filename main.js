 function startClassification(){
     navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eIkC1q8qO/model.json',modelready);
 }
 function modelready() {
     classifier.classify(gotResult);
 }
 function gotResults(error, results) {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
     }
 }