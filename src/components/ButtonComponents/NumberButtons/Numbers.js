
import React, {useState} from "react";
import NumberButton from "./NumberButtons";

import "../../ButtonComponents/NumberButtons/";
//import any components needed

//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumbersState] = useState(numbers);
  
  return (
    <div>
      {numbers.map((num, index)=> 
      <NumberButton key={index} numContent={num} value={num}/>)}
    </div>
  );
};

export default Numbers;