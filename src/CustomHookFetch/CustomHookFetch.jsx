import useFetch from "./useFetch";

export default function CustomHookFetch() {
  const { data, pending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  return (
    <div>
      <h1>Custom Hook useFetch</h1>
      {pending ? <h2>Loading... Please wait</h2> : null}
      {error ? <h2>`${error}. Something went wrong`</h2> : null}
      {data && data.length
        ? data.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
}
