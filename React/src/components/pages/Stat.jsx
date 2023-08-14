import React, {useState} from "react";
import { useParams } from "react-router-dom";
import DataList from "../viwes/local/DataList";
import Foot from "../viwes/global/Foot";
import DataChart from "../viwes/local/dataChart";

const Stat = (props) => {

    const {viewType} = useParams() 

    const 
        { statData } = props,
        [isShowChart, setIsShowChart] = useState(true)

    return (
        <React.Fragment>
            <DataList viewType={viewType} setShow={setIsShowChart} data={statData}></DataList>
            <DataChart viewType={viewType} show={isShowChart} data={statData}></DataChart>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Stat