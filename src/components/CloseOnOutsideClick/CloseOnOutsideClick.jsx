import { useRef, useState } from "react";
import useOnclickOutsideClose from "./useOnclickOutsideClose";

export default function CloseOnOutsideClick() {
  const [content, setContent] = useState(false);
  const ref = useRef(null);
  useOnclickOutsideClose(ref, () => setContent(false));

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold m-10">
        Close on outside click Custom Hook Project
      </h1>
      <div className="w-full flex justify-center">
        {content ? (
          <p className="bg-green-500 p-10 text-white w-[400px]" ref={ref}>
            Some content. Click outside to close the content!
          </p>
        ) : (
          <button
            className="py-2 px-5"
            style={{ backgroundColor: "purple", color: "white" }}
            onClick={() => setContent(true)}
          >
            Show Content
          </button>
        )}
      </div>
    </div>
  );
}
