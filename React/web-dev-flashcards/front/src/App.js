import { Routes, Route } from 'react-router-dom';
import Header from './components/views/global/Header';
import MainCategory from './components/categories/MainCategory';
import GeneralCategory from './components/categories/MainCategories/GeneralCategory';
function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path={"/Answer/:Type"}
          element={<GeneralCategory></GeneralCategory>}
        />
        <Route
          path={"/Categoey"}
          element={<MainCategory></MainCategory>}
        />
        <Route
          path={"*"}
          element={<MainCategory></MainCategory>}
        />
      </Routes>
    </>
  );
}

export default App;
