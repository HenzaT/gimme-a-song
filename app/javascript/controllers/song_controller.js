import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="song"
export default class extends Controller {
  static targets = ["allTime", "allKey", "allBpm", "allMood", "allInstrument"];

  connect() {
    this.generatedData = {};
    this.generatedInstrument = {};
  }

  changeAll() {
    const times = ["4/4", "5/4", "6/4", "6/8", "9/8", "7/8", "3/4"];
    const keys = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    const moods = ["sad", "happy", "energetic", "slow", "fast", "silly", "sombre", "complex"];
    const instruments = ["guitar", "piano", "bass", "drums", "drum machine", "synth", "vocals"];
    let min = 60;
    let max = 191;

    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const randomBpm = Math.floor(Math.random() * (max - min + 1));
    const randomInstrument = instruments[Math.floor(Math.random() * instruments.length)];

    this.allTimeTarget.innerText = randomTime;
    this.allBpmTarget.innerText = randomBpm
    this.allKeyTarget.innerText = randomKey;
    this.allMoodTarget.innerText = randomMood;
    this.allInstrumentTargets.forEach(instrument => {
      instrument.innerText = randomInstrument;
    });

    this.generatedData = { time_signature: randomTime, key: randomKey, mood: randomMood, bpm: randomBpm };
    this.generatedInstrument = { name: randomInstrument }
  }

  saveSong() {
    if (!this.generatedData.time_signature || !this.generatedData.key || !this.generatedData.mood || !this.generatedData.bpm || !this.generatedInstrument.name) {
      alert("Please generate values before saving!");
      return;
    }

    fetch("/songs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ song: this.generatedData, instrument: this.generatedInstrument } )
    })
    .then(response => response.json())
    .then(data => {
      console.log("Song saved:", data)
      // alert("Song saved successfully!");
    })
    .catch(error => console.error("error saving song:", error))
  }
}
