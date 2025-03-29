import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="randomBpm"
export default class extends Controller {
  static targets = ["bpm"];

  getRandomBpm() {
    let min = 60;
    let max = 191;
    return Math.floor(Math.random() * (max - min + 1));
  }

  changeBpm() {
    this.bpmTarget.innerText = this.getRandomBpm();
  }
}
