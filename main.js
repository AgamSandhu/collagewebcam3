var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition(); 

function start() {
    document.getElementById("textbox").innerHTML=""; 
    Recognition.start(); 
}

Recognition.onresult=function(event) {
    console.log(event); 
    var content=event.results[0][0].transcript;
    console.log(content);
    if(content=="take my selfie"){
        document.getElementById("textbox").innerHTML=content;
    speak(); 
    }
    
}
img_id="" 
function speak(){
    var synth=window.speechSynthesis;
    Webcam.attach(camara)
    speak_data="Taking your selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterthis); 
    

    setTimeout(function(){
        img_id="selfie1"; 
        take_selfie(); 
        speak_data="Taking your selfie in 10 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterthis); 
    },5000); 

    setTimeout(function(){
        img_id="selfie2"; 
        take_selfie(); 
        speak_data="Taking your selfie in 15 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterthis); 
    },10000);
    
    setTimeout(function(){
        img_id="selfie3";
        take_selfie(); 
    },15000); 

}

Webcam.set({
    width:320,height:240,image_formate:'jpeg',jpeg_quality:90
});
camara=document.getElementById("camara"); 

function take_selfie(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML='<img width="30%" id="selfie1" src="'+data_uri+'"/>'; 
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img width="30%" id="selfie2" src="'+data_uri+'"/>'; 
            }
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML='<img width="30%" id="selfie3" src="'+data_uri+'"/>'; 
                }
    }); 
}

function save(){
    link=document.getElementById("link"); 
    image=document.getElementById("selfie_image").src; 
    link.href=image;
    link.click();
}