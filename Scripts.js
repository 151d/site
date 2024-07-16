function talkText() {
    const msg = new SpeechSynthesisUtterance('Welcome to 151D Tech!');
    window.speechSynthesis.speak(msg);
}
