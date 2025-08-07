import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loader"
export default class extends Controller {

  static targets = [ 'footer', 'htmlBody', 'navbar', 'card', 'button', 'header', 'text', 'instCard' ]

  connect() {
    this.fadeIn(this.headerTarget, 0);
    this.fadeIn(this.textTarget, 500);
    this.fadeIn(this.buttonTarget, 600);
    this.fadeIn(this.cardTarget, 800);
    this.fadeIn(this.footerTarget, 1000);
  }

  fadeIn(target, delay) {
    if (target) {
      setTimeout(() => {
        target.classList.add('fade-in')
      }, delay)
    }
  }

  // toggleDarkMode() {
  //   this.htmlBodyTarget.classList.toggle("dark-mode");
  //   this.navbarTarget.classList.toggle("dark-mode");
  // }
}
