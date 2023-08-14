import styled from "styled-components"

const css = {
    HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-betweenl
    position: releative;
    width: 100%;
    height: 80px;
    background-color: #202634;
    `,
    FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: releative;
    width: 100%;
    height: 80px;
    background-color: #E5E5E5
    `,
    HeaderCSS: {
        Logo: styled.div`
        font-size: 34px;
        color: #B0F347;
        `
    }
}

export default css