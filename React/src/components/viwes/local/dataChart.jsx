import React, { useEffect, useState } from "react";
import css from "../../../styles/dataList.css";
import { ResponsivePie } from '@nivo/pie'

const { DataContainer } = css

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 280 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
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
                anchor: 'left',
                direction: 'column',
                justify: false,
                translateX: -280,
                translateY: 0,
                itemsSpacing: 35,
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

    const filterData = data.filter(item => item.split("::")[1] === "Расходы")

    const
        [v1, setV1] = useState(0),
        [v2, setV2] = useState(0),
        [v3, setV3] = useState(0),
        [v4, setV4] = useState(0),
        [v5, setV5] = useState(0),
        [v6, setV6] = useState(0)

    useEffect(() => {

        for (let i = 0; i < filterData.length; i++) {
            const splitEl = filterData[i].split("::")
            if (splitEl[2] === "Продукты") {
                setV1(prev => prev + +splitEl[0])
            }
            if (splitEl[2] === "Путешествия") {
                setV2(prev => prev + +splitEl[0])
            }
            if (splitEl[2] === "Счета") {
                setV3(prev => prev + +splitEl[0])
            }
            if (splitEl[2] === "Одежда") {
                setV4(prev => prev + +splitEl[0])
            }
            if (splitEl[2] === "Транспорт") {
                setV5(prev => prev + +splitEl[0])
            }
            if (splitEl[2] === "Развлечения") {
                setV6(prev => prev + +splitEl[0])
            }
        }

    }, [])

    return (
        <React.Fragment>
            {show && <DataContainer style={{ height: "500px" }}>
                <MyResponsivePie data={[
                    {
                        "id": "Покупка продуктов",
                        "label": "Покупка продуктов",
                        "value": v1,
                        "color": "hsl(220, 70%, 50%)"
                    },
                    {
                        "id": "Путешествия",
                        "label": "Путешествия",
                        "value": v2,
                        "color": "hsl(100, 1%, 70%)"
                    },
                    {
                        "id": "Оплата счетов",
                        "label": "Оплата счетов",
                        "value": v3,
                        "color": "hsl(343, 70%, 50%)"
                    },
                    {
                        "id": "Покупка одежды",
                        "label": "Покупка одежды",
                        "value": v4,
                        "color": "hsl(3, 70%, 50%)"
                    },
                    {
                        "id": "Расходы на транспорт",
                        "label": "Расходы на транспорт",
                        "value": v5,
                        "color": "hsl(242, 70%, 50%)"
                    },
                    {
                        "id": "Развлечения",
                        "label": "Развлечения",
                        "value": v6,
                        "color": "hsl(30, 70%, 50%)"
                    },

                ].filter( item => item.value > 0)
                }

                ></MyResponsivePie>
            </DataContainer>
            }
        </React.Fragment >
    )
}

export default DataChart