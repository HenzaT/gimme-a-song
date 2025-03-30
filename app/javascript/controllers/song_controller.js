import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="song"
export default class extends Controller {
  static targets = [ "allTime", "allKey", "allBpm", "allMood", "allInstrumentOne", "allInstrumentTwo", "allInstrumentThree", "allInstrumentFour" ];

  connect() {
    this.generatedData = {};
    // this.generatedInstrumentOne = {};
    // this.generatedInstrumentTwo = {};
    // this.generatedInstrumentThree = {};
    // this.generatedInstrumentFour = {};
  }

  changeAll() {
    const randomTime = this.getRandomTime();
    this.updateTime(randomTime);

    const randomKey = this.getRandomKey();
    this.updateKey(randomKey);

    const randomMood = this.getRandomMood();
    this.updateMood(randomMood);

    const min = 60;
    const max = 191;
    const randomBpm = this.getRandomBpm(min, max);
    this.updateBpm(randomBpm);

    const instruments = ["guitar", "piano", "bass", "drums", "drum machine", "synth", "vocals"];
    const randomInstrumentOne = instruments[Math.floor(Math.random() * instruments.length)];
    const randomInstrumentTwo = instruments[Math.floor(Math.random() * instruments.length)];
    const randomInstrumentThree = instruments[Math.floor(Math.random() * instruments.length)];
    const randomInstrumentFour = instruments[Math.floor(Math.random() * instruments.length)];

    this.allInstrumentOneTarget.innerText = randomInstrumentOne;
    this.allInstrumentTwoTarget.innerText = randomInstrumentTwo;
    this.allInstrumentThreeTarget.innerText = randomInstrumentThree;
    this.allInstrumentFourTarget.innerText = randomInstrumentFour;

    this.generatedData = { time_signature: randomTime, key: randomKey, mood: randomMood, bpm: randomBpm };
    // this.generatedInstrumentOne = { name: randomInstrumentOne };
    // this.generatedInstrumentTwo = { name: randomInstrumentTwo };
    // this.generatedInstrumentThree = { name: randomInstrumentThree };
    // this.generatedInstrumentFour = { name: randomInstrumentFour };
  }

  getRandomTime() {
    const times = ["4/4", "5/4", "6/4", "6/8", "9/8", "7/8", "3/4"];
    return times[Math.floor(Math.random() * times.length)];
  }

  updateTime(time) {
    this.allTimeTarget.innerText = time;
  }

  getRandomKey() {
    const keys = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return keys[Math.floor(Math.random() * keys.length)];
  }

  updateKey(key) {
    this.allKeyTarget.innerText = key
  }

  getRandomMood() {
    const moods = ["sad", "happy", "energetic", "slow", "fast", "silly", "sombre", "complex"];
    return moods[Math.floor(Math.random() * moods.length)];
  }

  updateMood(mood) {
    this.allMoodTarget.innerText = mood;
  }

  getRandomBpm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateBpm(bpm) {
    this.allBpmTarget.innerText = bpm;
  }

  saveSong() {
    if (!this.generatedData.time_signature || !this.generatedData.key ||
        !this.generatedData.mood || !this.generatedData.bpm ) {
      // alert("Please generate values before saving!");
      return;
    }

    fetch("/songs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ song: this.generatedData })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Song saved:", data)
      alert("Song saved successfully!");
    })
    .catch(error => console.error("error saving song:", error))
  }
}
