import React, {useState} from  "react";
import OperatorButton from './OperatorButton'

import {operators} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  
  const [ops, setOperators] = useState(operators)
    
  return (
          // (iterator, key)
    <div>      
      {ops.map((item, index) => {
        return <OperatorButton key= {index} operatorContent= {item.char} value = {item.value} />

      })}
    </div>
  );
};

export default Operators