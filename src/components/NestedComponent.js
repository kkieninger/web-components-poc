import React, { useEffect } from 'react';

const NestedComponent = (props) => {
  useEffect(() => {
    console.log('my props changed');
  }, [props]);

  return (
    <div>
      {props.title && 
        <h1>{props.title}</h1>
      }
    </div>
  );
};

export default NestedComponent;
