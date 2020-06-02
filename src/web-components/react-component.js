import React from "react";
import ReactDOM from "react-dom";
import NestedComponent from "../components/NestedComponent";

class TestReactComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  mountPoint = document.createElement('span');
  title;

  createElement(title) {
    return React.createElement(
      NestedComponent,
      { title },
      React.createElement("slot")
    );
  }

  connectedCallback() {
    // this.mountPoint = document.createElement('span');
    // gives this component access to the virtual / shadow DOM
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);

    const title = this.getAttribute("title");
    ReactDOM.render(this.createElement(title), this.mountPoint);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title" && oldValue !== newValue) {
      ReactDOM.render(this.createElement(newValue), this.mountPoint);
    }
  }
}

// register the web-component as a custom element
customElements.define("react-test-component", TestReactComponent);
