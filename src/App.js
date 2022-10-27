import "./styles/partials/_resets.scss";
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import PageTwo from "./components/PageTwo/pageTwo";
function App() {
  return (
    <div className="App">
      <Landing />
      <PageTwo />
    </div>
  );
}

export default App;
