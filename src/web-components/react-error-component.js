import React from "react";
import ReactDOM from "react-dom";
import ErrorComponent from "../components/ErrorComponent";
import ErrorBoundary from "../components/ErrorBoundary";

class ReactErrorComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  // element for the React app to mount to
  mountPoint = document.createElement("span");
  title;

  createElement(title) {
    return React.createElement(ErrorComponent, { title });
  }

  connectedCallback() {
    /**
     * Gives this component access to the virtual / shadow DOM, which is a requirement
     * of React. You will likely not need this method if you are not using something that
     * leverages the virtual DOM.
     */
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);

    const title = this.getAttribute("title");
    ReactDOM.render(
      <ErrorBoundary>
        {this.createElement(title)}
      </ErrorBoundary>,
      this.mountPoint
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    /**
     * check that the title property has updated and if its
     * old value is different from its updated value as to not
     * accidentally re-render
     */
    if (name === "title" && oldValue !== newValue) {
      ReactDOM.render(this.createElement(newValue), this.mountPoint);
    }
  }
}

// register the web-component as a custom element
customElements.define("react-error-component", ReactErrorComponent);
