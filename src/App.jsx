import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import useDarkMode from './hooks/UseDarkMode'

const App = () => {

  const [dark,setDark]=useDarkMode()

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Outlet context={[dark, setDark]} />
    </>
  );
};

export default App;
