import styled from "styled-components";

const carts = {
    SectionCarts: styled.section`
        max-width: 1000px;
        margin: auto;
    `,
    ContainerCart: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        // :nth-child(3n) {
            // margin-right: 0;
        // },
        // :nth-child(n + 3) {
        //     margin-bottom: 0;
        // }
    `,
    CartComp: styled.div`
        transition: ease-in-out 0.3s; 
        display: flex;
        flex-direction: column;
        position: relative;
        width: 300px;
        min-height: 450px;
        background: #1c92d2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${props => props.leftColor}, ${props => props.rightColor}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 20px;
        border-radius: 15px;
        margin: 0 0 20px 0;
        cursor: pointer;
        &::before {
            transition: ease-in-out 0.2s; 
            border-radius: 15px;
            content: "";
            position: absolute;
            inset: 8px; /* управляет расстоянием рассеивания */
            transform: translate(8px, 8px); /* управляет смещением */
            z-index: -1; /* располагает элемент позади основного */
            background: linear-gradient(to right, ${props => props.leftColor}, ${props => props.rightColor});
            filter: blur(5px); /* управляет размытием */
            
          };
        &:hover::before {
            transition: ease-in-out 0.2s; 
            border-radius: 15px;
            content: "";
            position: absolute;
            inset: 0px; /* управляет расстоянием рассеивания */
            transform: translate(0px, 0px); /* управляет смещением */
            z-index: -1; /* располагает элемент позади основного */
            background: linear-gradient(to right, ${props => props.leftColor}, ${props => props.rightColor});
            filter: blur(1px); /* управляет размытием */
        };
        &:hover {
            transform: translate(3px, 3px); /* управляет смещением */
        };
    `,
    FormCard: styled.form`
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        width: 300px;
        height: 450px;
        padding: 20px;
        background: ${props => props.backcolor};
        box-shadow: ${props => props.backshadow} 0px 0px 40px 11px;
        z-index: 2;
    `,
    TextareaCart: styled.div`
        border: none;
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border-bottom: solid 1px black;
        font-size: ${props => props.sizeText};
        text-align: center;
        &:focus {
            outline: none;
            border-color: green;
        }
    `,
    ContainerColors: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
}

export default carts