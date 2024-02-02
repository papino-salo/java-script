import React from "react";
import css from "../../../styles/styles.css";
import { useNavigate } from "react-router-dom";
import HOCBtn from "../../comps/HOCHeaderBtn";
import Button from "../../comps/button";

const { HeaderContainer, HeaderCss } = css

const HOCButtonComponent = HOCBtn(Button)

const Head = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
                <HeaderCss.MenuContainer>
                    <HOCButtonComponent text={"/main"}>Главная</HOCButtonComponent>
                    <HOCButtonComponent text={"/stat/расход"}>Статистика</HOCButtonComponent>
                    <HOCButtonComponent text={"/plan"}>Планирование</HOCButtonComponent>
                </HeaderCss.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head