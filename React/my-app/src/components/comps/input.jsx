import React, {useState} from "react";
import css from "../../styles/form.css";


const { InputComponent } = css

const Input = (props) => {

    const { placeholder, action, inputValue } = props
    
    return (
        <React.Fragment>
            <InputComponent 
            value={inputValue}
            type={"text"}
            placeholder={placeholder}
            maxLength={"100"}
            onChange={event => {
                const newValue = event.target.value
                action(newValue)
            }}
            />
        </React.Fragment>
    )
}
export default Input