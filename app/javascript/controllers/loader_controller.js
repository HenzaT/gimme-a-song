import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loader"
export default class extends Controller {
  static targets = [ "userCard" ]

  // connect() {
  //   this.userCardTarget.classList.remove("d-none")
  //   setTimeout(() => {
  //     (this.userCardTarget.classList.add("visible"))
  //   }, 50);
  // }

  // userCardTargetConnected(userCardTarget) {
  // }
}
