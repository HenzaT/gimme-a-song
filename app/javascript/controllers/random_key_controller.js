import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-key"
export default class extends Controller {
  static targets = ["key"];

  getRandomKey() {
    const songKeys = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return songKeys[Math.floor(Math.random() * songKeys.length)];
  }

  changeKey() {
    const newKey = this.getRandomKey();
    this.keyTarget.innerText = newKey;
  }
}
