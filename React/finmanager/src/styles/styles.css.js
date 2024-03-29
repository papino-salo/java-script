import styled from "styled-components/dist/styled-components.cjs";

const css = {
    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100;
        height: 80px;
        background-color: #202634;
        padding: 0 30px;
    `,
    FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #E5E5E5;
    `,
    HeaderCss: {
        Logo: styled.div`
            font-size: 30px;
            color: #b0f347;
        `,
        MenuContainer: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: relative;
        `
    }
}

export default css