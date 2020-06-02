import React, { useEffect, useRef } from 'react';

const NestedComponent = (props) => {
  /**
   * Caveat: Synthetic React events are not available to web-components
   * We achieve that here by passing a ref of the object we want to track
   * and attaching an event listener in the useEffect hook when it is rendered
   */
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      // attaching events
      ref.current.addEventListener('click', handleClick);
    }
  }, []);

  const handleClick = () => {
    console.log("i was clicked");
  };

  return (
    <div>
      {props.title && 
        <h1>{props.title}</h1>
      }
      <button ref={ref} id="button">Click Me</button>
    </div>
  );
};

export default NestedComponent;
