import "./App.css";
import "./components/navbar";
import "./components/carousel";
import "./components/aboutus";
import "./components/stories";
import "./components/project";
import "./components/counter";
import "./components/team";
import "./components/announcement";

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Aboutus from "./components/aboutus";
import Stories from "./components/stories";
import Project from "./components/project";
import Counters from "./components/counter";
import Team from "./components/team";
import Announcement from "./components/announcement";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Team />
      <Counters data={99786} name={"Number of colleges"} />
      {/* <Counters data={99786} name={"Number of volunteer"} />
      <Counters data={99786} name={"Number of Programme Officers"} /> */}
      <Announcement />
      <Aboutus />
      <Stories />
      <Project />
    </>
  );
}
export default App;
