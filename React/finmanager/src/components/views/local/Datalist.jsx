import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/datalist.css";

const { DataContainer, ContentLine, ContentCell, BtnLine, BtnItem } = css

const Datalist = (props) => {
    const { data = [], setShow, viewType } = props,
        filterData = data.filter(item => item.split("::")[1] === viewType),
        filterDataSumm = data.filter(item => item.split("::")[1] === viewType)
            .reduce((summ, item) => {

                return summ + parseInt(item.split("::")[0].split(" ")[0] + item.split("::")[0].split(" ")[1])

            }, 0),
        filterDataDelta = data
            .reduce((summ, item) => {

                if (item.split("::")[1] === "доход") {
                    return summ + parseInt(item.split("::")[0].split(" ")[0] + item.split("::")[0].split(" ")[1])
                }
                else {
                    return summ - parseInt(item.split("::")[0].split(" ")[0] + item.split("::")[0].split(" ")[1])
                }

            }, 0)

    const navigate = useNavigate()

    const
        reduseDataType1 = () => {
            navigate("/stat/доход")
            setShow(false)
        },
        reduseDataType2 = () => {
            navigate("/stat/расход")
            setShow(true)
        },
        reduseDataType3 = () => {
            navigate("/stat/общее")
            setShow(true)
    }

    return (
        <React.Fragment>
            <BtnLine>
                <BtnItem style={{fontWeight: viewType === "доход" ? "bold" : ""}} onClick={reduseDataType1}>Доходы</BtnItem>
                <BtnItem style={{fontWeight: viewType === "расход" ? "bold" : ""}} onClick={reduseDataType2}>Расходы</BtnItem>
                <BtnItem style={{fontWeight: viewType === "общее" ? "bold" : ""}} onClick={reduseDataType3}>Общее</BtnItem>
            </BtnLine>
            <DataContainer>
                {filterData.length > 0 && <React.Fragment>
                    {filterData.map((item, index) => {

                        return (
                            <ContentLine key={index} style={{ marginBottom: "15px" }}>
                                <ContentCell width={"20%"}>{item.split("::")[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split("::")[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split("::")[2]}</ContentCell>
                            </ContentLine>
                        )

                    })}
                    <ContentLine>
                        <ContentCell width={"20%"}>{filterDataSumm}</ContentCell>
                        <ContentCell width={"20%"}>---</ContentCell>
                        <ContentCell width={"60%"}>---</ContentCell>
                    </ContentLine>
                </React.Fragment>
                }
                {filterData.length === 0 && <React.Fragment>
                    {data.map((item, index) => {

                        return (
                            <ContentLine key={index} style={{ marginBottom: "15px" }}>
                                <ContentCell width={"20%"}>{item.split("::")[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split("::")[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split("::")[2]}</ContentCell>
                            </ContentLine>
                        )

                    })}
                    <ContentLine>
                        <ContentCell width={"20%"}>{filterDataDelta}</ContentCell>
                        <ContentCell width={"20%"}>---</ContentCell>
                        <ContentCell width={"60%"}>---</ContentCell>
                    </ContentLine>
                </React.Fragment>
                }
            </DataContainer>
        </React.Fragment>
    )
}

export default Datalist