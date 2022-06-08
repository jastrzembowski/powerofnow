import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Offers from "./components/Offers";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main/>
      <About/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
