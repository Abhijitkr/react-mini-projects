import useWindowSize from "./useWindowSize";

export default function CustomHookWindowSize() {
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Custom Hook Window Size</h1>
      <div>
        <p>{windowSize.width}</p>
        <p>{windowSize.height}</p>
      </div>
    </div>
  );
}
