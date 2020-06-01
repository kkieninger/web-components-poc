// Create a class for the element
class TestComponent extends HTMLElement {
  // Invoked each time the custom element is appended into a document-connected element
  connectedCallback() {
    this.innerHTML = `<h1>I'm a VanillaJS Web Component</h1>`;
  }
}

// register the web-component as a custom element
customElements.define("test-component", TestComponent);
