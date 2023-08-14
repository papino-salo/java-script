import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../src/components/viwes/global/Head"
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

function App() {

  const 
    [data, setData] = useState([])
    
  return (
    <React.Fragment>
      <Head></Head>
      <Routes>
        <Route
          path={"/main"}        
          element = {<Main action={setData}></Main>}
        />
        <Route
          path={"/stat/:viewType"}        
          element = {<Stat statData={data}></Stat>}
        />
        <Route
          path={"/plan"}
          element = {<Plan></Plan>}
        />
        <Route
          path={"*"}        
          element = {<Main action={setData}></Main>}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
