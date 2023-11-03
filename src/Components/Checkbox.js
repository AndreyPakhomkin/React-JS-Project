import React from "react";
import { useState } from "react";
import './Checkbox.css'

function Chekbox(){

  const [isChecked, setIsChecked] = useState(false);

  return(
    <div className="checkboxWrapper"> {/*На див обертка для откл отобр деф-го чекбокса*/}
      <input 
        className={isChecked ? 'checked' : ''}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
}

export default Chekbox;
