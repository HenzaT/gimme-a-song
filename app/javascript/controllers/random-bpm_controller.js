import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="randomBpm"
export default class extends Controller {
  static targets = ["bpm"];

  getRandomBpm() {
    const min = 60;
    const max = 191;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  changeBpm() {
    this.bpmTarget.innerText = this.getRandomBpm();
  }
}
