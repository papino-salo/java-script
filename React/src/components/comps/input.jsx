import React from "react";
import css from "../../styles/form.css";

const Input = (props) => {

    const { placeholder, action, inputValue, type} = props
    const {  Input } = css

    return (
        <React.Fragment>
            <Input
            value={inputValue}
                type={type}
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