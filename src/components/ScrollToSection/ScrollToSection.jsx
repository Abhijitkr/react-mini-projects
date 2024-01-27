import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef(null);

  const data = [
    {
      title: "Section 1",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "red",
      },
    },
    {
      title: "Section 2",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      title: "Section 3",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "blue",
      },
    },
    {
      title: "Section 4",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      title: "Section 5",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "yellow",
      },
    },
  ];

  // Used for Scrolling to a specific element
  // function scrollToSection() {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // }

  // Used for Scrolling to a specific section within the element
  function scrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Scroll To Section</h1>
      <button onClick={scrollToSection} className="py-2 px-5 bg-purple-300 m-5">
        Scroll to section
      </button>
      {data.map((dataItem, index) => (
        <div key={index} style={dataItem.style} ref={index === 2 ? ref : null}>
          {dataItem.title}
        </div>
      ))}
    </div>
  );
}
