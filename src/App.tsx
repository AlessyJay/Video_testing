import "./App.css";
import FirstTask from "./Components/firstTask";
import SecondTask from "./Components/SecondTask";
import Card from "./Components/Card";
import ForthTask from "./Components/ForthTask";

function App() {
  return (
    <>
      {/* All 3 examples of video broadcasting on webpage. */}
      <FirstTask />

      <hr />

      {/* All 4 examples of youtube video broadcasting on webpage. */}
      <SecondTask />

      <br />
      <br />

      <hr />

      {/* Create min. 700 words text explaining HTML Multimedia. */}
      <Card />

      <hr />

      <br />
      <br />

      {/* Create text min. 1400 words text (may include pictures) on HTTP Video streaming methods. */}
      <ForthTask />

      <hr />

      <br />
      <br />
    </>
  );
}

export default App;
