import React from 'react';

const Confirmation = props => {
  return (
    <div className="ui form">
      <h2>{props.message}</h2>
      <div className="field">
        <a href="#">Add another entry</a>
      </div>
    </div>
  );
};

export default Confirmation;
