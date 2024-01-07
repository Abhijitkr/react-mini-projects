import Accordion from "./components/Accordian";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import "./index.css";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor /> */}
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
