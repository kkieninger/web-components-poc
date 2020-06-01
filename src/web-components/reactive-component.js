class ReactiveTestComponent extends HTMLElement {
  // sets up which data attributes we want to listen / subscribe to
  static get observedAttributes() {
    return ["name"];
  }

  get nameFromData() {
    return this.getAttribute("name");
  }

  // only called for our observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // update web-component
    this.innerHTML = `
      <h1>I'm a VanillaJS Web Component that listens for updates</h1>
      <h3>
        ${this.nameFromData}
      </h3>
    `;
  }

  // initial render once web-component is registered
  connectedCallback() {
    // update web-component
    this.innerHTML = `
      <h1>I'm a VanillaJS Web Component that listens for updates</h1>
      <h3>
        ${this.nameFromData}
      </h3>
    `;
  }
}

// register the web-component as a custom element
customElements.define("reactive-test-component", ReactiveTestComponent);
