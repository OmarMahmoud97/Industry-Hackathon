import "./styles/partials/_resets.scss";
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
