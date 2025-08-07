import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="new-idea-loader"
export default class extends Controller {
  static targets = [ 'footer', 'htmlBody', 'navbar', 'card', 'button', 'header', 'text' ]

  connect() {
    this.fadeIn(this.headerTarget, 0);
    this.fadeIn(this.cardTarget, 500);
    this.fadeIn(this.textTarget, 600);
    this.fadeIn(this.buttonTarget, 800);
    this.fadeIn(this.footerTarget, 1000);
  }

  fadeIn(target, delay) {
    if (target) {
      setTimeout(() => {
        target.classList.add('fade-in')
      }, delay)
    }
  }
}
