import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../../styles/global.css";
import ModalAdd from "../local/ModalAdd";
import { useSelector, useDispatch } from "react-redux";
import { switchShowHomeBtn } from "../../../Redux-state/reducers/isShowBtnHeader";
import { changeTypeModalAdd, switchShowModalAdd } from "../../../Redux-state/reducers/addCard";
import { clearItemsAnswer } from "../../../Redux-state/reducers/showCards";
import { switchStatusRemove } from "../../../Redux-state/reducers/removeCard";
import { setType } from "../../../Redux-state/reducers/switchType";
import { switchStatusUpdate } from "../../../Redux-state/reducers/updateCard";

const { HeaderStyledComp } = GlobalStyle

function Header() {

    const navigate = useNavigate()

    const isShowBtn = useSelector(state => state.isShowBthHeader.isShow),
        isShowModal = useSelector(state => state.addCard.isShowModal),
        statusRemove = useSelector(state => state.removeCard.status),
        statusUpdate = useSelector(state => state.updateCard.status)

    const dispatch = useDispatch()

    const hideHomeBtn = () => {
        dispatch(setType("category"))
        dispatch(clearItemsAnswer())
        navigate("/Category")
        dispatch(changeTypeModalAdd("categories"))
        dispatch(switchShowHomeBtn(false))
    }

    const showModalAdd = () => {
        if (statusRemove === "enabled" ) {
            dispatch(switchStatusRemove("disabled"))
        } else if (statusUpdate === "enabled") {
            dispatch(switchStatusUpdate("disabled"))
        }
        dispatch(switchShowModalAdd("true"))
    }

    const removeCard = () => {
        if (statusRemove === "disabled") {
            dispatch(switchStatusUpdate("disabled"))
            dispatch(switchStatusRemove("enabled"))
        } else {
            dispatch(switchStatusRemove("disabled"))
        }
    }

    const showModalUpdate = () => {
        if (statusUpdate === "disabled") {
            dispatch(switchStatusRemove("disabled"))
            dispatch(switchStatusUpdate("enabled"))
        } else {
            dispatch(switchStatusUpdate("disabled"))
        }
    }

    return (
        <>
            <HeaderStyledComp.HeaderContainer>
                {isShowBtn && <button onClick={hideHomeBtn} style={{ marginRight: "auto" }}>Вернуться на главную</button>}
                <HeaderStyledComp.HeaderBtn
                    onClick={() => showModalAdd()}
                    typeshadow={isShowModal ? "inset" : ""}
                    shadowcolor={"#21c762"}
                    backgroundcolor={"#eef5ec"}
                >Добавить</HeaderStyledComp.HeaderBtn>
                <HeaderStyledComp.HeaderBtn
                    onClick={() => showModalUpdate()}
                    typeshadow={statusUpdate === "disabled" ? "" : "inset"}
                    shadowcolor={"#4ce9cabd"}
                    backgroundcolor={"#eff7f6"}
                >Изменить</HeaderStyledComp.HeaderBtn>
                <HeaderStyledComp.HeaderBtn
                    onClick={(event) => removeCard(event.target)}
                    typeshadow={statusRemove === "disabled" ? "" : "inset"}
                    shadowcolor={"#ff4141"}
                    backgroundcolor={"#fff4f4"}
                >Удалить</HeaderStyledComp.HeaderBtn>
            </HeaderStyledComp.HeaderContainer>
            {isShowModal ? <ModalAdd></ModalAdd> : <></>}

        </>
    )
}

export default Header