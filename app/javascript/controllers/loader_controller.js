import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loader"
export default class extends Controller {

  static targets = [ 'footer' ]

  // connect() {
  //   this.footerTarget.classList.add('fade');
  // }
}
