import { useRef, useState } from "react";
import useOnclickOutsideClose from "./useOnclickOutsideClose";

export default function CloseOnOutsideClick() {
  const [content, setContent] = useState(false);
  const ref = useRef(null);
  useOnclickOutsideClose(ref, () => setContent(false));

  return (
    <div>
      <h1>Close on outside click</h1>
      <div>
        {content ? (
          <p ref={ref}>Some content. Click outside to close the content!</p>
        ) : (
          <button
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
