import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="song"
export default class extends Controller {
  static targets = ["allTime", "allKey", "allBpm", "allMood", "allInstrument"];

  getRandomTime() {
    const times = ["4/4", "5/4", "6/4", "6/8", "9/8", "7/8", "3/4"];
    return times[Math.floor(Math.random() * times.length)];
  }

  getRandomKey() {
    const songKeys = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return songKeys[Math.floor(Math.random() * songKeys.length)];
  }

  getRandomBpm() {
    let min = 60;
    let max = 191;
    let random = Math.floor(Math.random() * (max - min + 1));

    return random
  }

  getRandomMood() {
    const moods = ["sad", "happy", "energetic", "slow", "fast", "silly", "sombre", "complex"];
    return moods[Math.floor(Math.random() * moods.length)];
  }

  randomInstrument() {
    const instruments = ["guitar", "piano", "bass", "drums", "drum machine", "synth", "vocals"];
    return instruments[Math.floor(Math.random() * instruments.length)];
  }

  changeAll() {
    this.allTimeTarget.innerText = this.getRandomTime();
    this.allKeyTarget.innerText = this.getRandomKey();
    this.allBpmTarget.innerText = this.getRandomBpm();
    this.allMoodTarget.innerText = this.getRandomMood();
    this.allInstrumentTargets.forEach(instrument => {
      instrument.innerText = this.randomInstrument();
    });
  }
}
