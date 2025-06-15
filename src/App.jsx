import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null
      ? JSON.parse(saved)
      : window.matchMedia("(prefers-color-scheme:dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

    const handleSystemTheme = (e) => {
      if (localStorage.getItem("darkMode") === null) {
        setDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemTheme);
  }, []);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Outlet context={[dark, setDark]} />
    </>
  );
};

export default App;
