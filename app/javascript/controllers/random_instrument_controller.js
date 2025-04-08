import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-instrument"
export default class extends Controller {
  static targets = [ "instrument" ];

  randomInstrument() {
    const instruments = ["guitar", "piano", "bass", "drums", "drum machine", "synth", "vocals"];
    return instruments[Math.floor(Math.random() * instruments.length)];
  }

  changeInstrument() {
    this.instrumentTarget.innerText = this.randomInstrument();
  }
}
