import React from "react";
import Inputs from "./style";

 const Input =  (props: any) =>{
    return (
        <Inputs 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        />
    )
}

export default Input;