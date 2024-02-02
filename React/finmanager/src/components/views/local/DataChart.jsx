import React, { useState, useEffect } from "react";
import css from "../../../styles/datalist.css";
import { ResponsivePie } from '@nivo/pie';

const { DataContainer } = css

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={9}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.2'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={4}
        arcLinkLabelsTextOffset={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsDiagonalLength={18}
        arcLinkLabelsStraightLength={20}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.8'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const DataChart = (props) => {

    const { data = [], show } = props

    const filterData = data.filter(item => item.split("::")[1] === "расход")

    const [ r01, setR01 ] = useState(0),
        [ r02, setR02 ] = useState(0),
        [ r03, setR03 ] = useState(0),
        [ r04, setR04 ] = useState(0),
        [ r05, setR05 ] = useState(0),
        [ r06, setR06 ] = useState(0)


    useEffect(() => {

        for (let i = 0; i < filterData.length; i++) {
            switch (
            filterData[i].split("::")[2]
            ) {
                case "Счета":
                    setR01(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                case "Транспорт":
                    setR02(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                case "Одежда":
                    setR03(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                case "Продукты":
                    setR04(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                case "Электроника":
                    setR05(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                case "Другое":
                    setR06(prev => prev + parseInt(filterData[i].split("::")[0].split(" ")[0] + filterData[i].split("::")[0].split(" ")[1]))
                    break;
                default:
                    break;
            }


        }

    }, [])


    return (
        <React.Fragment>
           { show && <DataContainer style={{ height: "500px" }}>
                 <MyResponsivePie data={
                    [
                        {
                            "id": "Счета",
                            "label": "Счета",
                            "value": r01,
                            "color": "hsl(329, 70%, 50%)"
                        },
                        {
                            "id": "Транспорт",
                            "label": "Транспорт",
                            "value": r02,
                            "color": "hsl(299, 70%, 50%)"
                        },
                        {
                            "id": "Одежда",
                            "label": "Одежда",
                            "value": r03,
                            "color": "hsl(16, 70%, 50%)"
                        },
                        {
                            "id": "Продукты",
                            "label": "Продукты",
                            "value": r04,
                            "color": "hsl(308, 70%, 50%)"
                        },
                        {
                            "id": "Электроника",
                            "label": "Электроника",
                            "value": r05,
                            "color": "hsl(22, 70%, 50%)"
                        },
                        {
                            "id": "Другое",
                            "label": "Другое",
                            "value": r06,
                            "color": "hsl(22, 70%, 50%)"
                        }
                    ].filter(item => item.value > 0)
                }></MyResponsivePie>
            </DataContainer> }
        </React.Fragment>
    )
}

export default DataChart