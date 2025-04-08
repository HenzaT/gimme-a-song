import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="expander"
export default class extends Controller {
  static targets = [ "expandingElementOne", "expandingElementTwo", "expandingElementThree", "secondRow" ]

  fireOne() {
    this.expandingElementOneTarget.classList.remove("d-none");
    if (this.expandingElementOneTarget) {
      this.fireTwo()
    } else {
      console.log("uh oh")
    }
  }

  fireTwo() {
    this.expandingElementTwoTarget.classList.remove("d-none");
  }

  fireThree() {
    this.expandingElementThreeTarget.classList.remove("d-none");
  }
}
