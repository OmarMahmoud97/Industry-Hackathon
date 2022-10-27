import "./styles/partials/_resets.scss";
import Landing from "./components/Landing/landing";
import PageTwo from "./components/PageTwo/pageTwo";
import Mission from "./components/Mission/mission";
import Phone from "./components/Phone/phone";
function App() {
  return (
    <div className="App">
      <Landing />
      <PageTwo />
      <Mission />
      <Phone />
    </div>
  );
}

export default App;
