import * as React from 'react';
import "./MarktanalyseATRRegio.css";
import { TextField } from "@mui/material";


function MarktanalyseATRRegio(props) {

  return (
    <div className="MarktanalyseATRRegio">
      <TextField id="standard-basic" label="ATRD" variant="standard" margin='normal' size='small' type='number' autoComplete='off' stepper='none'/>
      <TextField id="standard-basic" label="ATR60" variant="standard" margin='normal' size='small' type='number' autoComplete='off' />
      <TextField id="standard-basic" label="ATR15" variant="standard" margin='normal' size='small' type='number' autoComplete='off' />
    </div>
  );
}

export default MarktanalyseATRRegio;
