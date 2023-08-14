import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/styles.css";

const { HeaderContainer, HeaderCSS } = css

const buttonCss = {
    display: "block",
    padding: "10px 14px 12px",
    borderRadius: "6px",
    backgroundColor: "#B0F347",
    cursor: "pointer",
    marginRight: "10px"
}

const Head = () => {

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button onClick={() => navigate("/main")} style={buttonCss}>Главная</button>
                    <button onClick={() => navigate("/stat/Расходы")} style={buttonCss}>Статистика</button>
                    <button onClick={() => navigate("/plan")} style={buttonCss}>Планирование</button>
                </HeaderCSS.MenuContainer >
            </HeaderContainer >
        </React.Fragment >
    )

}
console.log(HeaderCSS)

export default Head