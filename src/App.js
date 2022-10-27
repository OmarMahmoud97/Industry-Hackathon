import "./styles/partials/_resets.scss";
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import PageTwo from "./components/PageTwo/pageTwo";
import Mission from "./components/mission/mission";
function App() {
  return (
    <div className="App">
      <Landing />
      <PageTwo />
      <Mission />
    </div>
  );
}

export default App;
