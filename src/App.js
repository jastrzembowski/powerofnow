import "./App.css";
import Nav from "./components/Nav";
import Header2 from "./components/Header2";
import Main from "./components/Main";
import About from "./components/About";
import Offers from "./components/Offers";
import Footer from "./components/Footer"
import CompSlides from "./components/CompSlides";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header2 />
      <CompSlides/>
      <Main/>
      <About/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
