import { MainTemplateWrapper } from "./MainTemplate.styles";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Outlet />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
