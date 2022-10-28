import "./styles/partials/_resets.scss";
import Landing from "./components/Landing/landing";
import Footer from "./components/Footer/footer";
import Testimonial from "./components/Testimonial/testimonial";

import PageTwo from "./components/PageTwo/pageTwo";
import Mission from "./components/Mission/mission";
import Phone from "./components/Phone/phone";
import Blog from "./components/Blog/blog";
import Results from "./components/Results/results";

function App() {
  return (
    <div className="App">
      {/* <Landing />
      <PageTwo />
      <Mission />
      <Phone />
      <Blog />
      <Testimonial />
      <Footer /> */}
      <Results />
    </div>
  );
}

export default App;
