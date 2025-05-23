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
    "timeButton",
    "timePadlock",
    "bpmPadlock",
    "moodPadlock",
    "keyPadlock",
    "instPadlock",
    "allInstrumentOne",
    "instrumentName",
    "instPic"
  ];

  connect() {
    this.changeAll;
  }

  locked = false

  lockTime() {
    this.lockUnlock(this.timePadlockTarget);
    this.locked = !this.locked

    if (this.locked) {
      console.log("this is locked!")
    } else {
      console.log("this is unlocked")
      this.changeAll();
    }
  }

  lockBpm() {
    this.lockUnlock(this.bpmPadlockTarget);
  }

  lockMood() {
    this.lockUnlock(this.moodPadlockTarget);
    console.log(this.moodPadlockTarget)
  }

  lockKey() {
    this.lockUnlock(this.keyPadlockTarget);
  }

  lockInst() {
    this.lockUnlock(this.instPadlockTarget);
  }

  lockUnlock(element) {
    element.classList.toggle("fa-lock-open");
    element.classList.toggle("fa-lock");
  }

  changeAll() {
    // time signature
    const randomTime = this.getRandomTime();
    this.updateTime(randomTime)

    // key
    const randomKey = this.getRandomKey();
    this.updateKey(randomKey);

    // mood
    const randomMood = this.getRandomMood();
    this.updateMood(randomMood);

    // BPM
    const min = 60;
    const max = 191;
    const randomBpm = this.getRandomBpm(min, max);
    this.updateBpm(randomBpm);

    // instrument
    const instruments = ["guitar", "piano", "bass", "drums", "drum machine", "synth", "vocals"];
    const randomInstrumentOne = instruments[Math.floor(Math.random() * instruments.length)];

    this.allInstrumentOneTarget.innerText = randomInstrumentOne;
    this.instrumentNameTarget.value = randomInstrumentOne;

    // instrument picture
    const instrumentText = this.allInstrumentOneTarget.textContent;

    this.instPicTargets.forEach(img => {
      if (instrumentText.includes('guitar')) {
        img.src = '../assets/guitar.png';
      } else if (instrumentText.includes('piano')) {
        img.src = '../assets/piano.png';
      } else if (instrumentText.includes('bass')) {
        img.src = '../assets/bass.png';
      } else if (instrumentText.includes('drums')) {
        img.src = '../assets/drum-set.png';
      } else if (instrumentText.includes('drum machine')) {
        img.src = '../assets/drum-machine.png';
      } else if (instrumentText.includes('synth')) {
        img.src = '../assets/synth.png';
      } else {
        img.src = '../assets/vocals.png';
      };
    });

    // client side song elements
    this.generatedData = {
      time_signature: randomTime,
      key: randomKey,
      mood: randomMood,
      bpm: randomBpm
    };

    // client side instrument
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
