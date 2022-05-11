import * as React from 'react';
import "./MarktanalyseVHLCO.css";
import { TextField } from "@mui/material";


function MarktanalyseVHLCO(props) {

  return (
    <div className="MarktanalyseVHLCO">
      <div>
      <TextField className='MarktanalyseVHCLO-TextField' id="standard-basic" label="VH" variant="standard" margin='normal' size='small'/>
      </div>
      <div>
      <TextField id="standard-basic" label="VL" variant="standard" margin='normal' size='small'/>
      </div>
      <div>
      <TextField id="standard-basic" label="VC" variant="standard" margin='normal' size='small'/>
      </div>
      <div>
      <TextField id="standard-basic" label="O" variant="standard" margin='normal' size='small'/>
      </div>
    </div>
  );
}

export default MarktanalyseVHLCO;
