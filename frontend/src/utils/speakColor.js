export default function speakColor(color) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = `The detected color is ${color}`;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
  }