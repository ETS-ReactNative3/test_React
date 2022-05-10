import * as React from 'react';
import "./Button.css";
import { TextField } from "@mui/material";




function Button(props) {
    return (
      <div className="Button">
        <h2>Ich bin ein Button</h2>
        <button className='Button-Label'> <b>Klick mich!</b> </button>
        <TextField
          error
          id="outlined-error"
          label="ATR60"
          defaultValue="Hello World"
        />

      </div>
      
    );

}

export default Button;
