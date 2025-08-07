import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = ['burger', 'menu', 'close', 'lineOne', 'lineTwo', 'body']

  // connect() {
  //   console.log('hello')
  // }

  toggleNav() {
    const body = document.getElementById('body');
    if (this.menuTarget.classList.contains('hidden')) {
      this.lineOneTarget.classList.add('clicked');
      this.lineTwoTarget.classList.add('clicked');
      body.style.overflow = "hidden";
      this.menuTarget.classList.add('fade-into');
      this.menuTarget.classList.remove('hidden');
    } else {
      this.lineOneTarget.classList.remove('clicked');
      this.lineTwoTarget.classList.remove('clicked');
      body.style.overflow = "auto";
      this.menuTarget.classList.remove('fade-into');
      this.menuTarget.classList.add('hidden');
    }
  }
}
