import "./styles/partials/_resets.scss";
import Landing from "./components/Landing/landing";
import Footer from "./components/Footer/footer";
import Testimonial from "./components/Testimonial/testimonial";

import PageTwo from "./components/PageTwo/pageTwo";
import Mission from "./components/Mission/mission";
import Phone from "./components/Phone/phone";
import Blog from "./components/Blog/blog";
import Results from "./components/Results/results";
import Recommendations from "./components/reccomendation/reccomendation";
import Quiz from "./components/questions/questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/quiz" element={<Results />} />
          <Route path="/" element={<Quiz />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
        {/* <Landing />
      <PageTwo />
      <Mission />
      <Phone />
      <Blog />
      <Testimonial />
      <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
