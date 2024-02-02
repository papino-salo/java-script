import React, { useEffect, useState } from "react";
import GlobalStyle from "../../../styles/global.css";
import carts from "../../../styles/cart.css";
import { useDispatch } from "react-redux";
import { fetchAnswerAdd, changeTypeModalAdd, switchShowModalAdd } from "../../../Redux-state/reducers/addCard";
import { fetchCategoryAdd } from "../../../Redux-state/reducers/addCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Textarea from '@mui/joy/Textarea';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import Box from '@mui/joy/Box';

const { ShadowBG, BtnCommon } = GlobalStyle
const { FormCard, ContainerColors } = carts
const defaultBgColor = "linear-gradient(to right,#eef2f3,#8e9eab)"

const ModalAdd = (props) => {

    const forbiddenSymbols = [" ", "Enter", ".", ",", "?", "%", "!", "&", "/", '"', "'", "`"]

    const [colorLeft, setColorLeft] = useState('#eef2f3'),
        [colorRight, setColorRight] = useState('#8e9eab')

    const showTypeAddCart = useSelector(state => state.addCard.typeModal),
        { leftColorAnswer, rightColorAnswer } = useSelector(state => state.updateCard.dataAnswer)

    const dispatch = useDispatch(),
        navigate = useNavigate()

    const handleSubmitAddAnswer = (event) => {
        event.preventDefault()
        let tittle = event.target.elements.tittle.value,
            shortAnswer = event.target.elements.shortAnswer.value,
            linkSourceAnswer = event.target.elements.linkSourceAnswer.value,
            typeCategoryAnswer = showTypeAddCart
        const data =
        {
            tittle: tittle,
            shortAnswer: shortAnswer,
            linkSourceAnswer: linkSourceAnswer,
            typeCategoryAnswer: typeCategoryAnswer,
        }
        dispatch(fetchAnswerAdd({ data, dispatch, showTypeAddCart }))
        dispatch(switchShowModalAdd(false))
        navigate(`Answer/${showTypeAddCart}`)
    }

    const handleSubmitAddCateg = (event) => {
        event.preventDefault()
        let tittle = event.target.elements.tittle.value,
            typeCategoryAnswer = event.target.elements.typeCategory.value
        const data =
        {
            tittle: tittle,
            typeCategory: typeCategoryAnswer,
            leftColor: colorLeft,
            rightColor: colorRight
        }
        dispatch(fetchCategoryAdd({ data, dispatch }))
        dispatch(switchShowModalAdd(false))
        navigate(`/category`)
    }

    return (
        <>
            <ShadowBG onClick={() => {
                dispatch(switchShowModalAdd(false))
            }}>
                {
                    showTypeAddCart === "categories"
                        ? <FormCard 
                            backshadow={"#21c762"}
                            backcolor={`linear-gradient(to right,${colorLeft},${colorRight})`} onClick={e => e.stopPropagation()}
                            onSubmit={(event) => { handleSubmitAddCateg(event) }}
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
                                maxRows={5}
                                name="tittle"
                                placeholder="Введите заголовок"
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
                                onKeyDown={(event) => {
                                    if (forbiddenSymbols.includes(event.key)) {
                                        event.preventDefault()
                                    }
                                }}
                                maxRows={1}
                                name="typeCategory"
                                placeholder="Введите тип категории"
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
                                            bgcolor: colorLeft,
                                        }}
                                    >
                                        <div />
                                    </AspectRatio>
                                    <Box
                                        name={"ColorLeft"}
                                        list={""}
                                        component="input"
                                        type="color"
                                        value={colorLeft}
                                        onChange={(event) => setColorLeft(event.target.value)}
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
                                            bgcolor: colorRight,
                                        }}
                                    >
                                        <div />
                                    </AspectRatio>
                                    <Box
                                        name={"ColorRight"}
                                        list={""}
                                        component="input"
                                        type="color"
                                        value={colorRight}
                                        onChange={(event) => setColorRight(event.target.value)}
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
                            <BtnCommon type="submit">Добавить</BtnCommon>
                        </FormCard>
                        : <FormCard
                            backshadow={"#21c762"}
                            backcolor={`linear-gradient(to right,${leftColorAnswer},${rightColorAnswer})`} onClick={e => e.stopPropagation()}
                            onSubmit={(event) => { handleSubmitAddAnswer(event) }}
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
                                maxRows={5}
                                name="linkSourceAnswer"
                                placeholder="Ссылка на источник"
                                variant="outlined"
                                required
                            />
                            <BtnCommon type="submit">Добавить</BtnCommon>
                        </FormCard>
                }
            </ShadowBG>
        </>
    )
}

export default ModalAdd