import { useRef } from "react";
import useFetch from "../CustomHookFetch/useFetch";

export default function ScrollToTop() {
  const { data, error, pending } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  const bottomRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error)
    return <h2 className="text-center">`${error}. Please try again!`</h2>;
  if (pending) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="text-center">
      <div>
        <h1 className="text-3xl font-bold m-5">Scroll To Top/Bottom Project</h1>
        <div className="bg-red-200 p-2">
          <h3 className="text-xl font-semibold">This is top Section</h3>
          <button
            onClick={scrollToBottom}
            className="bg-purple-300 py-2 px-5 m-2"
          >
            Scroll to Bottom
          </button>
        </div>
        <div className="bg-blue-200 p-2">
          <h3 className="text-xl font-semibold mb-2">This is Main Section</h3>
          {data && data.length
            ? data.map((item) => <p key={item.id}>{item.title}</p>)
            : null}
        </div>
        <div className="bg-green-200">
          <h3 className="text-xl font-semibold" ref={bottomRef}>
            This is Bottom Section
          </h3>
          <button onClick={scrollToTop} className="bg-purple-300 py-2 px-5 m-2">
            Scroll to Top
          </button>
        </div>
      </div>
    </div>
  );
}
