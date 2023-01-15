import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Information />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
