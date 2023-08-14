import styled from "styled-components";

const css = {
    FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    position: relative;
    width: 600px;
    height: auto;
    min-height: 60px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 3px grey;
    margin: 40px auto 40px;
    :last-child {
        margin-bottom: 0px;
    } 
    `,
    Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(229,229, 229);
    border-radius: 8px;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    `,
    Button: styled.div`
    display: block;
    position: relative;
    width: 220px;
    height: 44px;
    line-height: 42px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
    `
}

export default css