import React, { Component } from 'react';
import "./Button.css";
class Button extends Component {
  render() {
    return (
      <div className="Button">

        <h2>Ich bin ein Button</h2>
        <button className='Button-Label'> <b>Klick mich!</b> </button>

      </div>
    );
  }
}

export default Button;
