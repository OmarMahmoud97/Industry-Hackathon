import "./styles/partials/_resets.scss";
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import Footer from "./components/Footer/footer";
import Testimonial from "./components/Testimonial/testimonial";

function App() {
  return (
    <div className="App">
      <Landing />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
