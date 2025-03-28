import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-time-sig"
export default class extends Controller {

  static targets = [ "time", "padlock", "timeSigCard", "button" ];

  getRandomTime() {
    const times = ["4/4", "5/4", "6/4", "6/8", "9/8", "7/8", "3/4"];
    return times[Math.floor(Math.random() * times.length)];
  }

  changeTime() {
    const newTime = this.getRandomTime();
    this.timeTarget.innerText = newTime;
  }

  lockTime() {
    this.buttonTarget.toggleAttribute("disabled");
    // this.padlockTarget.toggleClass();
  }
}
