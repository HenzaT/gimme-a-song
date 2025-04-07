import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  submit(event) {
    event.preventDefault()

    const formData = new FormData(this.element)

    fetch(this.element.action, {
      method: this.element.method,
      headers: {
        'Accept': 'text/vnd.turbo-stream.html'
      },
      body: formData
    })
  }
}
