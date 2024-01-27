import useWindowSize from "./useWindowSize";

export default function CustomHookWindowSize() {
  const windowSize = useWindowSize();

  return (
    <div className="m-10 text-center">
      <h1 className="m-10 text-3xl font-bold">Custom Hook Window Size</h1>
      <div>
        <p className="text-xl font-semibold m-5">
          Resize window to see the window size
        </p>
        <p className="text-xl">
          Window Width: <span className="font-bold">{windowSize.width}</span>
        </p>
        <p className="text-xl">
          Window Height: <span className="font-bold">{windowSize.height}</span>
        </p>
      </div>
    </div>
  );
}
