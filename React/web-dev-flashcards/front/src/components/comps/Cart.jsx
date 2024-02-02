import React, { useEffect } from "react";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";
import carts from "../../styles/cart.css";
import GlobalStyle from "../../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { switchShowHomeBtn } from "../../Redux-state/reducers/isShowBtnHeader";
import { changeTypeModalAdd } from "../../Redux-state/reducers/addCard";
import { setTypeCategory, switchShowModalRemove } from "../../Redux-state/reducers/removeCard";
import { setType } from "../../Redux-state/reducers/switchType";
import { setDataCategoryForUpdate, setLeftColorAnswerForUpdate, setRightColorAnswerForUpdate, switchShowModalUpdate } from "../../Redux-state/reducers/updateCard";
import { setTittleCategory } from "../../Redux-state/reducers/showCards";

const { CartComp } = carts
const { TittleCart } = GlobalStyle

function Cart(props) {

    const { TittleText, CartText, Type, leftColor, rightColor } = props

    const navigate = useNavigate(),
        dispatch = useDispatch()

    const statusRemove = useSelector(state => state.removeCard.status),
        statusUpdate = useSelector(state => state.updateCard.status),
        typeCategory = useSelector(state => state.removeCard.typeCategory)


    const removeCardCategory = () => {
        dispatch(setTypeCategory(Type))
        dispatch(switchShowModalRemove(true))
    }

    const updateCardCategory = () => {
        dispatch(setDataCategoryForUpdate({ TittleText, Type, leftColor, rightColor }))
        dispatch(switchShowModalUpdate(true))
    }

    const showAnswers = () => {
        dispatch(setLeftColorAnswerForUpdate(leftColor))
        dispatch(setRightColorAnswerForUpdate(rightColor))
        dispatch(setTittleCategory(TittleText))
        navigate(`Answer/${Type}`)
        dispatch(setType(Type))
        dispatch(switchShowHomeBtn(true))
        dispatch(changeTypeModalAdd(Type))
    }

    const actionCardCategory = (target) => {
        if (statusRemove === "enabled") {
            return removeCardCategory()
        } else if (statusUpdate === "enabled") {
            return updateCardCategory()
        } else {
            return showAnswers()
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

    let CartTextWithSpace = []
    CartText.map((item, index) => {
        if (index < 7) {
            CartTextWithSpace.push(item)
            CartTextWithSpace.push(", ")
        }
    })
    CartTextWithSpace.pop()

    return (
        <CartComp
            onClick={(event) => actionCardCategory(event.target)}
            leftColor={leftColor}
            rightColor={rightColor}
            onMouseEnter={(event) => setHoverShadowStatus(event.target)}
            onMouseLeave={(event) => removeAllHoverClass(event.target)}
        >

            <TittleCart>{TittleText}</TittleCart>
            <p>{CartTextWithSpace}</p>
        </CartComp>
    )
}

export default Cart