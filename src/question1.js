import React from 'react';

function Question() {
    return (
      <div className="question1 align-center justify-center align-item-center">
        <p>Building Your Custom Workspace</p>
        <h2 className="m-0">How many employees do you have ?</h2>
        <h5 className="text-uppercase font-14 text-red mt-10">Why are we asking?</h5>
        <input value="4" type="number"/>
        <button className="primary-btn font-16">NEXT</button>
      </div>
    )
  }

  
  export default Question;