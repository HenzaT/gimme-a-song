import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="song"
export default class extends Controller {
  static targets = [
    "allTime",
    "allKey",
    "allBpm",
    "allMood",
    "name",
    "time",
    "key",
    "mood",
    "bpm",
    "allInstrumentOne",
    "instrumentName"
  ];

  connect() {
    this.element.addEventListener("time:changed", this.updateTime.bind(this));
  }

  changeAll() {
    const randomTime = this.getRandomTime();
    this.updateTime(randomTime)

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

    this.allInstrumentOneTarget.innerText = randomInstrumentOne;

    this.instrumentNameTarget.value = randomInstrumentOne;

    this.generatedData = {
      time_signature: randomTime,
      key: randomKey,
      mood: randomMood,
      bpm: randomBpm
    };

    this.selectedInstruments = {
      instrument_name: randomInstrumentOne,
    };

    sessionStorage.setItem('selectedInstrument', JSON.stringify(this.selectedInstruments));
    sessionStorage.setItem('generatedData', JSON.stringify(this.generatedData));

    console.log("Generated data now set:", this.generatedData, this.selectedInstruments);
  }

  getRandomTime() {
    const times = ["4/4", "5/4", "6/4", "6/8", "9/8", "7/8", "3/4"];
    return times[Math.floor(Math.random() * times.length)];
  }

  updateTime(time) {
    this.allTimeTarget.innerText = time;
    this.timeTarget.value = time;
  }

  getRandomKey() {
    const keys = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return keys[Math.floor(Math.random() * keys.length)];
  }

  updateKey(key) {
    this.allKeyTarget.innerText = key
    this.keyTarget.value = key;
  }

  getRandomMood() {
    const moods = ["sad", "happy", "energetic", "slow", "fast", "silly", "sombre", "complex"];
    return moods[Math.floor(Math.random() * moods.length)];
  }

  updateMood(mood) {
    this.allMoodTarget.innerText = mood;
    this.moodTarget.value = mood;
  }

  getRandomBpm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateBpm(bpm) {
    this.allBpmTarget.innerText = bpm;
    this.bpmTarget.value = bpm;
  }

  //SAVE METHOD
  saveSong() {
    const generatedData = JSON.parse(sessionStorage.getItem('generatedData'));
    const instrumentData = JSON.parse(sessionStorage.getItem('selectedInstrument'));
    const name = this.nameTarget.value;

    const instrumentName = instrumentData ? instrumentData.instrument_name : null;
    this.allInstrumentOneTarget.value = instrumentName;


    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({
        song: { ...generatedData, name },
        instrument_name: instrumentName
      })
    })

    .then(response => response.json())
    .then(data => {
      console.log("Song saved:", data)
      alert("Song saved successfully!");
    })
    .catch(error => console.error("error saving song:", error))
  }
}
