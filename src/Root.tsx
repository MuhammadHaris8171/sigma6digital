import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer/Footer"


function Root() {

  return (
    <>
    <Header />
    <ScrollToTop />
    {/* <Loader /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Root
