import React, { useEffect, useRef } from "react";

const ErrorComponent = (props) => {
  /**
   * Caveat: Synthetic React events are not available to web-components
   * We achieve that here by passing a ref of the object we want to track
   * and attaching an event listener in the useEffect hook when it is rendered
   */
  const ref = useRef(null);

  // const asyncError = () => {
  //   try {
  //     throw new Error('I am an async error');
  //   } catch (e) {
  //     throw e;
  //   }
  // };

  const regularError = () => {
    throw new Error("I am a regular error");
  };

  useEffect(() => {
    if (ref) {
      // attaching events
      ref.current.addEventListener("click", handleClick);
    }

    // asyncError();
    regularError();
  }, []);

  const handleClick = () => {
    console.log("track stuff");
  };

  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
      <button ref={ref} id="button">
        Click Me
      </button>
    </div>
  );
};

export default ErrorComponent;
