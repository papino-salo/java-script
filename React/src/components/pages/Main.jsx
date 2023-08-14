import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Foot from "../viwes/global/Foot";
import Input from "../comps/input";
import css from "../../styles/form.css";

const Main = (props) => {

    const [value, setValue] = useState(""),
        [type, setType] = useState("Доходы"),
        [comment, setComment] = useState(""),

        { FormContainer, Button } = css,

        { action } = props,

        containerRadio = {
            display: "flex",
            flexDirection: "row"
        }

    const validationColor = () => {
        if (value.length > 2 && type) {
            return true
        } else {
            return false
        }
    }

    const validationForm = () => {
        if (value.length > 2 && type) {

            let dataLine = `${value}::${type}::${comment}`
            action(
                prev => [...prev, dataLine]
            )

            setValue("")
            setType("Доходы")
            setComment("")
        } else {
            return false
        }
    }

    const handleChange = (event) => {
        setType((event.target).value);
        setComment("")
    };

    const handleChangeComment = (event) => {
        setComment((event.target).value);
    };


    return (
        <React.Fragment>
            <FormContainer>
                <Input type={"number"} inputValue={value} action={setValue} placeholder={"Введите сумму транзакции"} />
                <FormControl style={{marginTop: "10px", marginBottom: "15px"}}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
                    <RadioGroup
                        style={containerRadio}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Доходы" control={<Radio />} label="Доходы" />
                        <FormControlLabel value="Расходы" control={<Radio />} label="Расходы" />
                    </RadioGroup>
                </FormControl>
                
                {type === "Доходы" && <Input type={"text"} inputValue={comment} action={setComment} placeholder={"Введите комментарий"} />}
                {type === "Расходы" && <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расходов</FormLabel>
                    <RadioGroup
                        style={containerRadio}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={comment}
                        onChange={handleChangeComment}
                    >
                        <FormControlLabel value="Продукты" control={<Radio />} label="Покупка продуктов" />
                        <FormControlLabel value="Счета" control={<Radio />} label="Оплата счетов" />
                        <FormControlLabel value="Одежда" control={<Radio />} label="Покупка одежды" />
                        <FormControlLabel value="Транспорт" control={<Radio />} label="Расходы на транспорт" />
                        <FormControlLabel value="Развлечения" control={<Radio />} label="Развлечения" />
                        <FormControlLabel value="Путешествия" control={<Radio />} label="Путешествия" />
                    </RadioGroup>
                </FormControl>}
                <Button
                    backgroundColor={
                        validationColor() ?
                            "rgb(176, 243, 71);" :
                            "rgb(229, 229, 229);"
                    }
                    onClick={validationForm}
                >Сохранить транзакцию</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main