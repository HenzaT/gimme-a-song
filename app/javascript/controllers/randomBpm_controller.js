import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="randomBpm"
export default class extends Controller {
  static targets = ["bpm"]

  getRandomBpm() {
    let min = 60;
    let max = 191;
    let random = Math.floor(Math.random() * (max - min + 1));

    return random
  }

  changeBpm() {
    this.bpmTarget.textContent = this.getRandomBpm();
  }
}
