import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold">React Mini Projects</h1>
      </div>
      <div>
        <ul className="flex gap-10 flex-wrap justify-center p-5">
          <li className="relative w-80 h-fit bg-gray-500 overflow-hidden group transition duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <Link to="/accordian">
              <img
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
                src="https://pixabay.com/get/g4359a80f76517cdabab6530a6c96aa1c36e77863ee61ba7bb15aa50e7bc1eefa92b148d3a8dcf6ed9109c84711b53ce2e97e13f1dd82e2e0772ba55366c7cd3a_1280.jpg"
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
        </ul>
      </div>
    </main>
  );
}
