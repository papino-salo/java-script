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
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 3px grey;
    margin: 40px auto 40px;
    `,
    ContainerLine: styled.div`
    margin: 15px;
    padding: 20px;
    border: solid 1px grey;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    `,
    ContentCell: styled.div`
    position: relative;
    width: ${props => props.width};
    font-size: 14px;
    `,
    BtnLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    with: 800px;
    margin: 0 auto;
    margin-top: 40px;
    `,
    BtnItem: styled.span`
    display: block;
    position: relative;
    font-size: 13px;
    color: grey;
    margin-right: 40px;
    cursor: pointer;
    `,
    ContainerResult: styled.div`
    margin: 15px;
    padding-left: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    `
}

export default css