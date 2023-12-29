import React from "react";
import { useNavigate } from "react-router-dom";

const HOCBtn = (BTNComponent) => {
    return (props) => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate()

        const onClick = () => {
            navigate(props.text)
        }

         return <BTNComponent {...props} onClick={onClick} />
    }
}

export default HOCBtn