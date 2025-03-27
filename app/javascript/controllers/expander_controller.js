import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="expander"
export default class extends Controller {
  static targets = [ "expandingElementOne", "expandingElementTwo", "expandingElementThree" ]

  fireOne() {
    this.expandingElementOneTarget.classList.remove("d-none");
  }

  fireTwo() {
    this.expandingElementTwoTarget.classList.remove("d-none");
  }

  fireThree() {
    this.expandingElementThreeTarget.classList.remove("d-none");
  }
}
