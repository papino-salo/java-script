import styled from "styled-components";

const css = {
    DataContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 800px;
    height: auto;
    min-height: 60px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
    :last-child {
        margin-bottom: 0px;
    }`,
    ContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    text-align: center;
    `,
    ContentCell: styled.span`
    display: block;
    position: relative;
    width: ${props => props.width};
    font-size: 18px;
    `,
    BtnLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    `,
    BtnItem: styled.span`
    display: block;
    position: relative;
    font-size: 15px;
    color: grey;
    margin-right: 40px;
    cursor: pointer;
    `
}

export default css