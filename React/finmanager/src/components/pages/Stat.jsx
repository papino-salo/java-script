import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Datalist from "../views/local/Datalist";
import DataChart from "../views/local/DataChart";

const Stat = (props) => {

    const {statData} = props

    const [ isShowChart, setIsShowChart ] = useState(true)

    const { viewType } = useParams()

    return (
        <React.Fragment>
                <Datalist viewType={viewType} setShow={setIsShowChart} data={statData}/>
                <DataChart show={isShowChart} data={statData}></DataChart>
        </React.Fragment>
    )
}
export default Stat