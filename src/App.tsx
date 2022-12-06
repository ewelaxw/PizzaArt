import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./Components/Molecules/RequiredAuth/RequiredAuth";
import UserProvider from "./Providers/UserProvider";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import ChooseAdditivesView from "./Views/ChooseAdditivesView/ChooseAdditivesView";
import ChooseSizeView from "./Views/ChooseSizeView/ChooseSizeView";
import ChooseTypePizzaView from "./Views/ChooseTypePizzaView/ChooseTypePizzaView";
import HeroPageView from "./Views/HeroPage/HeroPageView";
import LoginView from "./Views/LoginView/LoginView";
import PreparationOrderView from "./Views/PreparationOrderView/PreparationOrderView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
import SummaryView from "./Views/SummaryView/SummaryView";

const App = () => {
  const {
    index,
    login,
    registration,
    chooseType,
    chooseAdditives,
    chooseSize,
    summary,
    preparation,
  } = routes;
  return (
    <UserProvider>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route index path={index} element={<HeroPageView />} />
          <Route path={login} element={<LoginView />} />
          <Route path={registration} element={<RegistrationView />} />
          <Route element={<RequiredAuth />}>
            <Route path={chooseType} element={<ChooseTypePizzaView />} />
            <Route path={chooseAdditives} element={<ChooseAdditivesView />} />
            <Route path={chooseSize} element={<ChooseSizeView />} />
            <Route path={summary} element={<SummaryView />} />
            <Route path={preparation} element={<PreparationOrderView />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
