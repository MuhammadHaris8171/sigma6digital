import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function Root() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      <Outlet context={{ language }} />
      <Footer language={language as "en" | "ar"}/>
    </>
  );
}

export default Root;
