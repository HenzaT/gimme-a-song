import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="expander"
export default class extends Controller {
  static targets = ["expandingElement"]

  connect() {
    console.log("hello expander");
  }

  fire() {
    this.expandingElementTarget.classList.remove("d-none");
  }
}
