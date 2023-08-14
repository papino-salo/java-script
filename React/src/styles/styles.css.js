import styled from "styled-components"

const css = {
    HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    padding: 20px;
    background-color: #202634;
    `,
    FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    padding: 20px;
    background-color: #E5E5E5
    `,
    HeaderCSS: {
        MenuContainer: styled.div`
            color: red;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
        `,
        Logo: styled.h1`
            font-size: 30px;
            color: #B0F347;
        `
    }
}

export default css