import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  {setData as setDataD} from "./redux-state/reducers/data";
import { Routes, Route } from "react-router-dom";
import Head from "./components/views/global/Head";
import Foot from "./components/views/global/Foot";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

function App() {

  const data = useSelector(state => state.dataReducer.data)
  const dispatch = useDispatch()

  const setData = (param) => dispatch(setDataD(param)) 

  

  return (
    <React.Fragment>
      <Head></Head>
      <Routes>
        <Route
          path={"/Main"}
          element={<Main action={setData}></Main>}
        />
        <Route
          path={"/Stat/:viewType"}
          element={<Stat statData={data}></Stat>}
        />
        <Route
          path={"/Plan"}
          element={<Plan statData={data}></Plan>}
        />
        <Route
          path={"*"}
          element={<Main action={setData}></Main>}
        />
      </Routes>
      <Foot></Foot>
    </React.Fragment>
  );
}

export default App;
