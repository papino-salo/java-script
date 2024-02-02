import React from "react";
import Datalist from "../views/local/Datalist";


export default class Plan extends React.Component {

    constructor(props) {
        super(props)

    }

    // shouldComponentUpdate(props, state) {
    //     // вызывается, когда компонент должен перерисоваться
    //     // return false (если обновлять компонент не нужно)
    // }

    // componentDidUpdate(prevProps, preState) {
    //     // вызывается, когда отработал Renders
    //     // принимает аргументы до обновления компонента
    //     // выполнение зарпосов к серверу
    //     // нельзя менять state, иначе бесконечаня рекурсия
    // }

    // componentDidMount() {
    //     // отрабатывает, если всё отрендерилось корректно
    //     // выполнение зарпосов к серверу
    //     // нельзя менять state, иначе бесконечаня рекурсия
    // }

    // componentWillUnmount() {
    //     // Срабатывает перед размонтированием компонента
    //     // Основная задача - подчищать за компонентом (таймеры, запросы к серверу и т.д.)
    // }



    render() {
        return (
            <>
                <Datalist viewType={"расход"} data={this.props.statData} />
            </>
        )
    }

}