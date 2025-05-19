import { Outlet } from "react-router-dom";
import "../../shared/styles/global.scss";
import { Header } from "../../components/header";
import { Space } from "../../shared/ui/Space";
import { Footer } from "../../components/footer";
import { useScreenWidth } from "../../shared/hooks/useScreenWidth";
import { HeaderMobile } from "../../components/header/ui/HeaderMobile/HeaderMobile";

export const Layout = () => {
  const { isMobile } = useScreenWidth();
  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Space h={80} />

      <div className="container">
        <Outlet />
      </div>

      <Space h={80} />
      <Footer />
    </>
  );
};
