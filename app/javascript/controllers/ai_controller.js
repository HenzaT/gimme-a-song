import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="ai"
export default class extends Controller {

  static targets = [ "generateButton" ]

  connect() {
  }

  generate(event) {
    event.preventDefault();

    let button = this.generateButtonTarget;
    button.disabled = true
    button.innerText = "Generating";

    // const ideaId = this.data.get("idea-id")
    // const timeSignature = this.data.get("time-signature")

    // await fetch("/my_songs/generate_inspiration", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
    //   },
    //   body: JSON.stringify({ idea_id: ideaId, time_signature: timeSignature })
    // })
  }
}
