import { useState } from "react";

import React from 'react'

const State = () => {
    const[count,setCount]= useState(0)
  return (
    <button onClick={()=>setCount(count+1)}>

        increment{count}

    </button> 
    )
}

export default State



