import "./index.css";
import Accordion from "./components/Accordian";
import DarkLightMode from "./components/DarkLightMode";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import QRCodeGenerator from "./components/QRCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TabParent from "./components/Tabs/TabParent";
import TreeView from "./components/TreeView";
import menus from "./components/TreeView/data";
import ModalParent from "./components/Modal/ModalParent";
import GithubProfile from "./components/GithubProfile/GithubProfile";
import Searching from "./components/AutoCompleteSearch/Searching";
import BackgroundChanger from "./components/BackgroundChanger";
import ContextAPI from "./components/ContextAPI/ContextAPI";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import TodoApp from "./components/TodoApp/TodoApp";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FeatureFlags from "./components/FeatureFlags/FeatureFlags";
import FeatureFlagContextState from "./components/FeatureFlags/contex/contex";
import CustomHookFetch from "./components/CustomHookFetch/CustomHookFetch";
import CloseOnOutsideClick from "./components/CloseOnOutsideClick/CloseOnOutsideClick";
import CustomHookWindowSize from "./components/CustomHookWindowSize/CustomHookWindowSize";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToSection from "./components/ScrollToSection/ScrollToSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordian" element={<Accordion />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/star-rating" element={<StarRating noOfStars={10} />} />
          <Route
            path="/image-slider"
            element={
              <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} />
            }
          />
          <Route path="/load-more" element={<LoadMore />} />
          <Route path="/tree-view" element={<TreeView menus={menus} />} />
          <Route path="/qrcode-generator" element={<QRCodeGenerator />} />
          <Route path="/theme-changer" element={<DarkLightMode />} />
          <Route
            path="/scroll-indicator"
            element={
              <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
            }
          />
          <Route path="/tab-parent" element={<TabParent />} />
          <Route path="/modal-parent" element={<ModalParent />} />
          <Route path="/github-profile" element={<GithubProfile />} />
          <Route path="/search-suggestion" element={<Searching />} />
          <Route path="/background-changer" element={<BackgroundChanger />} />
          <Route path="/user-context" element={<ContextAPI />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route
            path="/feature-flag"
            element={
              <FeatureFlagContextState>
                <FeatureFlags />
              </FeatureFlagContextState>
            }
          />
          <Route path="/use-fetch-hook" element={<CustomHookFetch />} />
          <Route
            path="/use-close-outside-click"
            element={<CloseOnOutsideClick />}
          />
          <Route
            path="/use-window-size-hook"
            element={<CustomHookWindowSize />}
          />
          <Route path="/scroll-top" element={<ScrollToTop />} />
          <Route path="/scroll-section" element={<ScrollToSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
