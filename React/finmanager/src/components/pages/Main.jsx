import React, { useEffect } from "react";
import { changeViewType, changeValue, changeComment } from "../../redux-state/reducers/viewTypeForMain";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import css from "../../styles/form.css";
import Input from "../comps/input";

const { FormContainer, Button } = css

const Main = (props) => {

    const { action } = props
    
    const dispatch = useDispatch(),
        viewType = useSelector(state => state.viewTypeMain.viewType),
        viewValue = useSelector(state => state.viewTypeMain.value),
        viewComment = useSelector(state => state.viewTypeMain.comment)

    const validation = () => {
        if (viewValue.length > 2 && viewType) {

            const dataLine = `${viewValue}::${viewType}::${viewComment}`
            action(dataLine)
            dispatch(changeValue(""))
            dispatch(changeViewType("доход"))
            dispatch(changeComment(""))
        }
    }

    const validationColor = () => {
        if (viewValue > 2) {
            return "#b0f347;"
        } else {
            return "rgb(231, 231, 237);"
        }
    }

    const handleChange = (event) => {
        dispatch(changeComment(""));
        dispatch(changeViewType(event.target.value));
    };

    const handleChangeCommetIncome = (param) => {
        dispatch(changeComment(param));
    };

    const handleChangeCommetOutlay = (event) => {
        dispatch(changeComment(event.target.value));
    }

    const hadleChangeValue = (param) => {
        dispatch(changeValue(param))
    };
    

    return (
        <React.Fragment>
            <FormContainer>
                <Input inputValue={viewValue} action={hadleChangeValue} placeholder={"Введите сумму транзакции"} />
                <FormControl style={{marginTop: "10px", marginBottom: "13px"}}>
                    <FormLabel style={{ textAlign: "center" }} id="demo-controlled-radio-buttons-group">Выбериите тип транзации</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={viewType}
                        onChange={handleChange}
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <FormControlLabel value="расход" control={<Radio />} label="Расход" />
                        <FormControlLabel value="доход" control={<Radio />} label="Доход" />
                    </RadioGroup>
                </FormControl>
                {viewType === "доход" && <Input inputValue={viewComment} action={handleChangeCommetIncome} placeholder={"Введите комментарий"} />}
                {viewType === "расход" && <FormControl>
                    <FormLabel style={{ textAlign: "center" }} id="demo-controlled-radio-buttons-group">Выбериите тип расхода</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={viewComment}
                        onChange={handleChangeCommetOutlay}
                        style={{
                            justifyContent: "space-evenly",
                            flexDirection: "row"
                        }}
                    >
                        <FormControlLabel value="Счета" control={<Radio />} label="Счета" />
                        <FormControlLabel value="Транспорт" control={<Radio />} label="Транспорт" />
                        <FormControlLabel value="Одежда" control={<Radio />} label="Одежда" />
                        <FormControlLabel value="Продукты" control={<Radio />} label="Продукты" />
                        <FormControlLabel value="Электроника" control={<Radio />} label="Электроника" />
                        <FormControlLabel value="Другое" control={<Radio />} label="Другое" />
                    </RadioGroup>
                </FormControl>
                }
                <Button onClick={validation} backgroundColor={validationColor} >Сохранить транзакцию</Button>
            </FormContainer>
        </React.Fragment>
    )
}

export default Main