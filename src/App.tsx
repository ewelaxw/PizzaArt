import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import HeroPageView from "./Views/HeroPage/HeroPageView";
import LoginView from "./Views/LoginView/LoginView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";

const App = () => {
  const { index, login, registration } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<HeroPageView />} />
        <Route path={login} element={<LoginView />} />
        <Route path={registration} element={<RegistrationView />} />
      </Route>
    </Routes>
  );
};

export default App;
