import Accordion from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import "./index.css";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor /> */}
      {/* <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} /> */}
      <LoadMore />
    </>
  );
}

export default App;
