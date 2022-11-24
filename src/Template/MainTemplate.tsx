import { MainTemplateWrapper } from "./MainTemplate.styles";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Molecules/Navigation/Navigation";
import Footer from "../Components/Molecules/Footer/Footer";

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Navigation />
      <Outlet />
      <Footer />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
