import { useNavigate } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Tab from "./Tab";
import URL from "../context/URL";

function App(props) {
  const tab = props.tab;
  // const navigate = useNavigate();

  return (
    <>
    <Header tab={tab}></Header>
    <Tab tab={tab}></Tab>
    <Footer></Footer>
    </>
  );
}

export default App;
