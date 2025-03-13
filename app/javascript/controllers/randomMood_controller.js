import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-mood"
export default class extends Controller {
  static targets = ["mood"];

  connect() {
    console.log("hello from random mood");
  }

  getRandomMood() {
    const moods = ["sad", "happy", "energetic", "slow", "fast", "silly", "sombre", "complex"];
    return moods[Math.floor(Math.random() * moods.length)];
  }

  changeMood() {
    const newMood = this.getRandomMood();
    this.moodTarget.textContent = newMood;
  }
}
