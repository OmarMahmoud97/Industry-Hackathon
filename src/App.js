import "./styles/partials/_resets.scss";
import Landing from "./components/Landing/landing";
import Footer from "./components/Footer/footer";
import Testimonial from "./components/Testimonial/testimonial";

import PageTwo from "./components/PageTwo/pageTwo";
import Mission from "./components/Mission/mission";
import Phone from "./components/Phone/phone";
import Blog from "./components/Blog/blog";

function App() {
  return (
    <div className="App">
      <Landing />

      <PageTwo />
      <Mission />
      <Phone />
      <Blog />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
