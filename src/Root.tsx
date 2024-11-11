import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function Root() {
  const location = useLocation();
  const isMainService = location.pathname === "/main-service";

  return (
    <>
      <Header theme={isMainService ? "dark" : undefined} />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
