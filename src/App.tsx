import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import HeroPageView from "./Views/HeroPage/HeroPageView";

const App = () => {
  const { index } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<HeroPageView />} />
      </Route>
    </Routes>
  );
};

export default App;
