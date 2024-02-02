import React, { useEffect, useState } from "react";
import GlobalStyle from "../../../styles/global.css";
import carts from "../../../styles/cart.css";
import { useDispatch } from "react-redux";
import { switchShowModalAdd } from "../../../Redux-state/reducers/addCard";
import { fetchAnswerAdd } from "../../../Redux-state/reducers/addCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Textarea from '@mui/joy/Textarea';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import Box from '@mui/joy/Box';
import { fetchAnswersUpdate, fetchCategoryUpdate, setLeftColorAnswerForUpdate, setLeftColorCategForUpdate, setRightColorAnswerForUpdate, setRightColorCategForUpdate, switchShowModalUpdate, switchStatusUpdate } from "../../../Redux-state/reducers/updateCard";

const { ShadowBG, BtnCommon } = GlobalStyle
const { FormCard, ContainerColors } = carts

const ModalUpdate = (props) => {



    const [colorLeft, setColorLeft] = useState('#eef2f3'),
        [colorRight, setColorRight] = useState('#8e9eab')


    const showTypeAddCart = useSelector(state => state.addCard.typeModal),
          {tittleCateg, typeCategory, leftColor, rightColor} = useSelector(state => state.updateCard.dataCategory),
          {id, tittleAnswer, shortAnswer, link, leftColorAnswer, rightColorAnswer} = useSelector(state => state.updateCard.dataAnswer)

    const dispatch = useDispatch(),
        navigate = useNavigate()

    const handleSubmitUpdateAnswer = (event) => {
        event.preventDefault()
        let tittle = event.target.elements.tittle.value,
            shortAnswer = event.target.elements.shortAnswer.value,
            linkSourceAnswer = event.target.elements.linkSourceAnswer.value
        const data =
        {
            id: id,
            tittle: tittle,
            shortAnswer: shortAnswer,
            linkSourceAnswer: linkSourceAnswer,
            typeCategoryAnswer: showTypeAddCart
        }
        dispatch(fetchAnswersUpdate({ data, dispatch, showTypeAddCart }))
        dispatch(switchShowModalUpdate(false))
        dispatch(switchStatusUpdate("disabled"))
        navigate(`/Answer/${showTypeAddCart}`)
    }

    const handleSubmitUpdateCateg = (event) => {
        event.preventDefault()
        let tittle = event.target.elements.tittle.value
        const data =
        {
            tittle: tittle,
            type: typeCategory,
            leftColor: leftColor,
            rightColor: rightColor
        }
        dispatch(fetchCategoryUpdate({ data, dispatch }))
        dispatch(switchShowModalUpdate(false))
        dispatch(switchStatusUpdate("disabled"))
        navigate(`/category`)
    }
    console.log(leftColor)
    useEffect(() => {
        console.log(leftColor)
    }, [leftColor])

    return (
        <>
            <ShadowBG onClick={() => {
                dispatch(switchShowModalUpdate(false))
                dispatch(switchStatusUpdate("disabled"))
            }}>
                {
                    showTypeAddCart === "categories"
                        ? <FormCard
                            backshadow={"#4ce9cabd"}
                            backcolor={`linear-gradient(to right,${leftColor},${rightColor})`} onClick={e => e.stopPropagation()}
                            onSubmit={(event) => { handleSubmitUpdateCateg(event) }}
                        >
                            <Textarea
                                style={
                                    {
                                        marginBottom: "auto",
                                        textAlign: "center",
                                        color: "black",
                                        fontWeight: "600",
                                        backgroundColor: "#ffffff70",
                                        border: "solid 1px black"
                                    }
                                }
                                defaultValue={ tittleCateg }
                                maxRows={5}
                                name="tittle"
                                placeholder="Введите заголовок"
                                variant="outlined"
                                required
                            />
                            <ContainerColors style={{ marginBottom: "20px" }}>
                                <Button
                                    component="label"
                                    style={
                                        {
                                            backgroundColor: "#ffffff70",
                                            border: "solid 1px black"
                                        }
                                    }
                                    tabIndex={-1}
                                    role={undefined}
                                    aria-label="fill color"
                                    variant="outlined"
                                    color="neutral"
                                    endDecorator={
                                        <SvgIcon fontSize="md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    }
                                    sx={{ pl: 1 }}
                                >
                                    <AspectRatio
                                        variant="plain"
                                        ratio="1"
                                        sx={{
                                            borderRadius: '50%',
                                            width: '1.5em',
                                            bgcolor: leftColor,
                                        }}
                                    >
                                        <div />
                                    </AspectRatio>
                                    <Box
                                        name={"ColorLeft"}
                                        list={""}
                                        component="input"
                                        type="color"
                                        value={leftColor}
                                        onChange={(event) => dispatch(setLeftColorCategForUpdate(event.target.value))}
                                        sx={{
                                            clip: 'rect(0 0 0 0)',
                                            clipPath: 'inset(50%)',
                                            height: '1px',
                                            overflow: 'hidden',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            whiteSpace: 'nowrap',
                                            width: '1px',
                                        }}
                                    />
                                </Button>
                                <Button
                                    component="label"
                                    style={
                                        {
                                            backgroundColor: "#ffffff70",
                                            border: "solid 1px black"
                                        }
                                    }
                                    tabIndex={-1}
                                    role={undefined}
                                    aria-label="fill color"
                                    variant="soft"
                                    color="neutral"
                                    endDecorator={
                                        <SvgIcon fontSize="md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    }
                                    sx={{ pl: 1 }}
                                >
                                    <AspectRatio
                                        name={"colorRight"}
                                        variant="plain"
                                        ratio="1"
                                        sx={{
                                            borderRadius: '50%',
                                            width: '1.5em',
                                            bgcolor: rightColor,
                                        }}
                                    >
                                        <div />
                                    </AspectRatio>
                                    <Box
                                        name={"ColorRight"}
                                        list={""}
                                        component="input"
                                        type="color"
                                        value={rightColor}
                                        onChange={(event) => dispatch(setRightColorCategForUpdate(event.target.value))}
                                        sx={{
                                            clip: 'rect(0 0 0 0)',
                                            clipPath: 'inset(50%)',
                                            height: '1px',
                                            overflow: 'hidden',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            whiteSpace: 'nowrap',
                                            width: '1px',
                                        }}
                                    />
                                </Button>
                            </ContainerColors>
                            <BtnCommon type="submit">Изменить</BtnCommon>
                        </FormCard>
                        : <FormCard
                            backshadow={"#4ce9cabd"}
                            backcolor={`linear-gradient(to right,${leftColorAnswer},${rightColorAnswer})`} onClick={e => e.stopPropagation()}
                            onSubmit={(event) => { handleSubmitUpdateAnswer(event) }}
                        >
                            <Textarea
                                style={
                                    {
                                        marginBottom: "30px",
                                        textAlign: "center",
                                        color: "black",
                                        fontWeight: "600",
                                        backgroundColor: "#ffffff70",
                                        border: "solid 1px black"
                                    }
                                }
                                defaultValue={ tittleAnswer }
                                maxRows={5}
                                name="tittle"
                                placeholder="Введите заголовок"
                                variant="outlined"
                                required
                            />
                            <Textarea
                                style={
                                    {
                                        marginBottom: "auto",
                                        color: "black",
                                        backgroundColor: "#ffffff70",
                                        border: "solid 1px black"
                                    }
                                }
                                defaultValue={shortAnswer}
                                maxRows={5}
                                name="shortAnswer"
                                placeholder="Введите краткий ответ"
                                variant="outlined"
                                required
                            />
                            <Textarea
                                style={
                                    {
                                        marginBottom: "20px",
                                        color: "black",
                                        backgroundColor: "#ffffff70",
                                        border: "solid 1px black"
                                    }
                                }
                                defaultValue={link}
                                maxRows={5}
                                name="linkSourceAnswer"
                                placeholder="Ссылка на источник"
                                variant="outlined"
                                required
                            />
                            <BtnCommon type="submit">Изменить</BtnCommon>
                        </FormCard>
                }
            </ShadowBG>
        </>
    )
}

export default ModalUpdate