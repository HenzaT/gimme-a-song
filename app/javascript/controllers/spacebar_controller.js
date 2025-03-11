import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="spacebar"
export default class extends Controller {
  static targets = ["spacebarElement"]

  refresh() {
    this.spacebarElementTarget.click();
  }
}
