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

  if (error) return <h2>`${error}. Please try again!`</h2>;
  if (pending) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <p>Top Section</p>
      <button onClick={scrollToBottom}>Scroll to Top</button>
      {data && data.length
        ? data.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
      <p ref={bottomRef}>Scroll to Bottom</p>
      <button onClick={scrollToTop}>Bottom Section</button>
    </div>
  );
}
