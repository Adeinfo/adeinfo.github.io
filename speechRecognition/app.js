const BTN = document.querySelector('.talk');
const CONTENT =  document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Microphone activated, you can speak');
}

recognition.onresult = function(event){
    console.log(event);
}

//Add eventListener to the button
BTN.addEventListener('click', () => {
    recognition.start();
})