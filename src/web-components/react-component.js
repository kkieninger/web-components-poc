import React from "react";
import ReactDOM from "react-dom";

// @TODO - find a reasonable way to make this reactive
class TestReactComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    // gives this component access to the virtual / shadow DOM
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    // one possible way we can pass down data into a web-component
    const name = this.getAttribute("name");
    ReactDOM.render(
      <div>
        <h1>I'm a React Web Component</h1>
        <p>I have data being passed in: {name}</p>
      </div>,
      mountPoint
    );
  }
}

// register the web-component as a custom element
customElements.define("react-test-component", TestReactComponent);
