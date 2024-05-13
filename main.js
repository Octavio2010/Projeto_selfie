var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("Mensagem").innerHTML = "";
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("Mensagem").innerHTML = content;
    if (content == "tire minha selfie") {
        speak()
    }
}
var cont = 0;

function speak() {
    var synth = window.speechSynthesis;
    //speakData = document.getElementById("Mensagem").value;
    speakData = "Tirando sua selfie em 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(() => {
        takeSelfie()
        save()
    }, 11000);
    temp(cont)
}

camera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSelfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result_1").innerHTML = '<img id = "selfies" src = "' + data_uri + '"/>'
        document.getElementById("result_2").innerHTML = '<img id = "selfies" src = "' + data_uri + '"/>'
        document.getElementById("result_3").innerHTML = '<img id = "selfies" src = "' + data_uri + '"/>'
    })
}

function save() {
    link = document.getElementById("link")
    image = document.getElementById("selfies").src;
    link.href = image;
    link.click()
}

function temp(cont) {
    for (var i = 0; i < 5; i++) {
        cont = cont + 1
        var synth = window.speechSynthesis;
        speak_data = cont;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
}