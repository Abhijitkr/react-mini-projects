import { Link } from "react-router-dom";
import getImageUrl from "./image-util";

export default function Home() {
  const projects = [
    {
      title: "Accordion Project",
      image: "accordian.png",
      link: "/accordian",
    },
    {
      title: "Random Color Generator Project",
      image: "random-color-generator.png",
      link: "/random-color",
    },
    {
      title: "Star Rating Project",
      image: "star-rating.png",
      link: "/star-rating",
    },
    {
      title: "Image Slider Project",
      image: "image-slider.png",
      link: "/image-slider",
    },
    {
      title: "Load More Project",
      image: "load-more.png",
      link: "/load-more",
    },
    {
      title: "Tree View Project",
      image: "tree-view.png",
      link: "/tree-view",
    },
    {
      title: "QR-Code Generator Project",
      image: "qr-code.png",
      link: "/qrcode-generator",
    },
    {
      title: "Theme Changer Project",
      image: "theme-changer.png",
      link: "/theme-changer",
    },
    {
      title: "Scroll Indicator Project",
      image: "scroll-indicator.png",
      link: "/scroll-indicator",
    },
    {
      title: "Tab Parent Project",
      image: "tab-parent.png",
      link: "/tab-parent",
    },
    {
      title: "Modal Parent Project",
      image: "modal-parent.png",
      link: "/modal-parent",
    },
    {
      title: "Github Profile Viewer Project",
      image: "github-profile.png",
      link: "/github-profile",
    },
    {
      title: "Auto Complete Search Project",
      image: "auto-search.png",
      link: "/search-suggestion",
    },
    {
      title: "Background Changer Project",
      image: "background-changer.png",
      link: "/background-changer",
    },
    {
      title: "React Concept of Context API Project",
      image: "user-context.png",
      link: "/user-context",
    },
    {
      title: "Password Generator Project",
      image: "password-generator.png",
      link: "/password-generator",
    },
    {
      title: "Todo App Project",
      image: "todo-app.png",
      link: "/todo-app",
    },
    {
      title: "Tic-Tac-Toe Game Project",
      image: "tictactoe-game.png",
      link: "/tictactoe",
    },
    {
      title: "Feature Flags Project",
      image: "feature-flag.png",
      link: "/feature-flag",
    },
    {
      title: "useFetch Custom Hook Project",
      image: "useFetch.png",
      link: "/use-fetch-hook",
    },
    {
      title: "useCloseOnOutsideClick Custom Hook Project",
      image: "useCloseOnOutsideClick.png",
      link: "/use-close-outside-click",
    },
    {
      title: "useWindowSize Custom Hook Project",
      image: "useWindowSize.png",
      link: "/use-window-size-hook",
    },
    {
      title: "Scroll To Top/Bottom Project",
      image: "scroll-top.png",
      link: "/scroll-top",
    },
    {
      title: "Scroll To Section within Element Project",
      image: "scroll-section.png",
      link: "/scroll-section",
    },
    {
      title: "Weather App Project",
      image: "weather-app.png",
      link: "/weather-app",
    },
  ];
  const listItemClass =
    "relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]";
  return (
    <main>
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold text-white">React Mini Projects</h1>
      </div>
      <div>
        {/* <ul className="flex gap-10 flex-wrap justify-center p-5">
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/accordian">
              <img
                src="/images/accordian.png"
                alt="Accordion Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Accordion Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/random-color">
              <img
                src="/images/random-color-generator.png"
                alt="Random Color Generator Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Random Color Generator Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/star-rating">
              <img
                src="/images/star-rating.png"
                alt="Star Rating Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Star Rating Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/image-slider">
              <img
                src="/images/image-slider.png"
                alt="Image Slider Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Image Slider Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/load-more">
              <img
                src="/images/load-more.png"
                alt="Load More Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Load More Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/tree-view">
              <img
                src="/images/tree-view.png"
                alt="Tree View Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Tree View Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/qrcode-generator">
              <img
                src="/images/qr-code.png"
                alt="QR-Code Generator Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  QR-Code Generator Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/theme-changer">
              <img
                src="/images/theme-changer.png"
                alt="Theme Changer Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Theme Changer Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/scroll-indicator">
              <img
                src="/images/scroll-indicator.png"
                alt="Scroll Indicator Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Scroll Indicator Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/tab-parent">
              <img
                src="/images/tab-parent.png"
                alt="Tab Parent Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Tab Parent Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/modal-parent">
              <img
                src="/images/modal-parent.png"
                alt="Modal Parent Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Modal Parent Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/github-profile">
              <img
                src="/images/github-profile.png"
                alt="Github Profile Viewer Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Github Profile Viewer Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/search-suggestion">
              <img
                src="/images/auto-search.png"
                alt="Auto Complete Search Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Auto Complete Search Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/background-changer">
              <img
                src="/images/background-changer.png"
                alt="Background Changer Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Background Changer Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/user-context">
              <img
                src="/images/user-context.png"
                alt="React Concept of Context API Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  React Concept of Context API Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/password-generator">
              <img
                src="/images/password-generator.png"
                alt="Password Generator Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Password Generator Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/todo-app">
              <img
                src="/images/todo-app.png"
                alt="Todo App Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">Todo App Project</h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/tictactoe">
              <img
                src="/images/tictactoe-game.png"
                alt="Tic-Tac-Toe Game Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Tic-Tac-Toe Game Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/feature-flag">
              <img
                src="/images/feature-flag.png"
                alt="Feature Flags Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Feature Flags Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/use-fetch-hook">
              <img
                src="/images/useFetch.png"
                alt="useFetch Custom Hook Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  useFetch Custom Hook Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/use-close-outside-click">
              <img
                src="/images/useCloseOnOutsideClick.png"
                alt="useCloseOnOutsideClick Custom Hook Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  useCloseOnOutsideClick Custom Hook Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/use-window-size-hook">
              <img
                src="/images/useWindowSize.png"
                alt="useWindowSize Custom Hook Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  useWindowSize Custom Hook Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/scroll-top">
              <img
                src="/images/scroll-top.png"
                alt="Scroll To Top/Bottom Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Scroll To Top/Bottom Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/scroll-section">
              <img
                src="/images/scroll-section.png"
                alt="Scroll To Section within Element Project"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                <h1 className="text-xl font-bold mb-2">
                  Scroll To Section within Element Project
                </h1>
                <div className="links opacity-0 translate-y-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"></div>
              </div>
            </Link>
          </li>
        </ul> */}
        <ul className="flex gap-10 flex-wrap justify-center p-5">
          {projects.map((project, index) => (
            <li key={index} className={listItemClass}>
              <Link to={project.link}>
                <img
                  src={getImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 bg-black group-hover:opacity-75 transition-opacity text-center">
                  <h1 className="text-xl font-bold mb-2">{project.title}</h1>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
