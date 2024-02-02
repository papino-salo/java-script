import styled from "styled-components";

const GlobalStyle = {
    HeaderStyledComp: {
        HeaderContainer: styled.header`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            max-width: 1000px;
            padding: 20px 0;
            margin: auto;
            margin-bottom: 20px;
            :last-child { 
                margin: 0;
            }
        `,
        HeaderBtn: styled.button`
            transition: ease-in-out 0.4s; 
            background-color: ${props => props.backgroundcolor};
            box-shadow: ${props => props.typeshadow} ${props => props.shadowcolor} 0px 0px 8px 0px;
            margin-right: 40px;
        `
    },
    TitleComp: styled.h2`
        word-wrap: break-word;
        font-size: 44px;
        margin: 0 0 30px 0;
        text-align: center;
    `,
    TittleCart: styled.h3`
        word-wrap: break-word;
        font-size: 23px;
        margin: 0 0 20px 0;
    `,
    ShadowBG: styled.div`
        z-index: 1;
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
    `,
    TextShortAnswer: styled.p`
        font-size: 19px;
        word-wrap: break-word;
    `,
    BtnCommon: styled.button`
        border: solid black 1px;
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    `,
}

export default GlobalStyle