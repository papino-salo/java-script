import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/dataList.css";

const { DataContainer, ContainerLine, ContentCell, BtnLine, BtnItem, ContainerResult } = css

const DataList = (props) => {

    const navigate = useNavigate()

    const
        { data = [], setShow, viewType } = props,
        filterData = data.filter(item => item.split("::")[1] === viewType),
        filterDataSumm = data.filter(item => item.split("::")[1] === viewType).reduce((summ, item) => {

            return summ + +item.split("::")[0]

        }, 0),
        filterDataDelta = data.reduce((summ, item) => {
            if (item.split("::")[1] === "Доходы") {
                return summ + +item.split("::")[0]

            } else {
                return summ - +item.split("::")[0]
            }

        }, 0)

    const reduceDataType1 = () => {
        navigate("/stat/Доходы")
        setShow(false)
    }
    const reduceDataType2 = () => {
        navigate("/stat/Расходы")
        setShow(true)
    }
    const reduceDataType3 = () => {
        navigate("/stat/Общее")
        setShow(true)
    }

    return (
        <React.Fragment>
            <BtnLine>
                <BtnItem style={{ fontWeight: viewType === "Доходы" ? "bold" : "" }} onClick={reduceDataType1}>Доходы</BtnItem>
                <BtnItem style={{ fontWeight: viewType === "Расходы" ? "bold" : "" }} onClick={reduceDataType2}>Расходы</BtnItem>
                <BtnItem style={{ fontWeight: viewType === "Общее" ? "bold" : "" }} onClick={reduceDataType3}>Общее</BtnItem>
            </BtnLine>
            <DataContainer>
                {filterData.length > 0 && <React.Fragment>
                    {filterData.map((item, index) => {
                        return (
                            <ContainerLine key={index}>
                                <ContentCell width={"15%"}>{item.split("::")[0]}</ContentCell>
                                <ContentCell width={"15%"}>{item.split("::")[1]}</ContentCell>
                                <ContentCell width={"15%"}>{item.split("::")[2]}</ContentCell>
                            </ContainerLine>
                        )
                    })}
                    <ContainerResult>
                        <ContentCell width={"15%"}>{filterDataSumm}</ContentCell>
                        <ContentCell width={"15%"}>---</ContentCell>
                        <ContentCell width={"15%"}>---</ContentCell>
                    </ContainerResult>
                </React.Fragment>}

                {filterData.length === 0 && <React.Fragment>
                    {data.map((item, index) => {
                        return (
                            <ContainerLine key={index}>
                                <ContentCell width={"15%"}>{item.split("::")[0]}</ContentCell>
                                <ContentCell width={"15%"}>{item.split("::")[1]}</ContentCell>
                                <ContentCell width={"15%"}>{item.split("::")[2]}</ContentCell>
                            </ContainerLine>
                        )
                    })}
                    <ContainerResult>
                        <ContentCell width={"15%"}>{filterDataDelta}</ContentCell>
                        <ContentCell width={"15%"}>---</ContentCell>
                        <ContentCell width={"15%"}>---</ContentCell>
                    </ContainerResult>
                </React.Fragment>
                }
            </DataContainer>
        </React.Fragment >)
}

export default DataList