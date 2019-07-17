import React, {useState} from "react";
import SpecialButton from "./SpecialButton";

import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [special, setSpecials] = useState(specials)

  return (
    <div>
      {special.map((item, index) => 
         <SpecialButton key ={index} SpecialContent = {item.char} value ={item.value} />
      )}
    </div>
  )
};

export default Specials