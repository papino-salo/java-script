import React, { useEffect } from "react";
import carts from "../../styles/cart.css";
import GlobalStyle from "../../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { switchShowModalRemove, setIdRemoveCard } from "../../Redux-state/reducers/removeCard";
import { setDataAnswerForApdate, switchShowModalUpdate } from "../../Redux-state/reducers/updateCard";

const { CartComp } = carts
const { TittleCart, TextShortAnswer } = GlobalStyle

function CartAnswer(props) {

    const { srcLink, TittleText, CartText, idProp, leftColor, rightColor } = props

    const statusRemove = useSelector(state => state.removeCard.status),
        statusUpdate = useSelector(state => state.updateCard.status)

    const dispatch = useDispatch()

    let id = idProp

    const removeCardAnswer = (target) => {
        dispatch(switchShowModalRemove(true))
        dispatch(setIdRemoveCard(id))
        target.classList.add("delete-hover")
    }

    const updateCardAnswer = () => {
        dispatch(setDataAnswerForApdate({ idProp, TittleText, CartText, srcLink, leftColor, rightColor }))
        dispatch(switchShowModalUpdate(true))
    }

    const actionCard = (target) => {
        if (statusRemove === "enabled") {
            removeCardAnswer(target)
        } else if (statusUpdate === "enabled") {
            updateCardAnswer()
        }
    }

    const setHoverShadowStatus = (target) => {
        if (statusRemove === "enabled") {
            target.classList.add("delete-hover")
        } else if (statusUpdate === "enabled") {
            target.classList.add("update-hover")
        }
    }

    const removeAllHoverClass = (target) => {
        setTimeout(() => {
            target.classList.remove("delete-hover")
        }, 300)
        setTimeout(() => {
            target.classList.remove("update-hover")
        }, 300)
    }

    return (
        <>
            <CartComp
                leftColor={leftColor}
                rightColor={rightColor}
                onClick={(event) => actionCard(event.target)}
                onMouseEnter={(event) => setHoverShadowStatus(event.target)}
                onMouseLeave={(event) => removeAllHoverClass(event.target)}
            >
                <TittleCart onMouseEnter={(event) => {
                    removeAllHoverClass(event.target)
                }}>{TittleText}</TittleCart>
                <TextShortAnswer
                    onMouseEnter={(event) => {
                        removeAllHoverClass(event.target)
                    }}
                    style={{ marginBottom: "auto" }}>{CartText}</TextShortAnswer>
                <p>{srcLink}</p>
            </CartComp>
        </>
    )
}

export default CartAnswer