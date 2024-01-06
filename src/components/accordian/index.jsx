import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleClick = (getDataId) => {
    setSelected(getDataId);
  };

  return (
    <div className="wrapper">
      {data &&
        data.length > 0 &&
        data.map((dataItem) => (
          <div key={dataItem.id} className="dataItem">
            <div
              className="title"
              onClick={() =>
                handleClick(dataItem.id === selected ? null : dataItem.id)
              }
            >
              <div>{dataItem.question}</div>
              <span>+</span>
            </div>
            {selected === dataItem.id && (
              <div className="answer">{dataItem.answer}</div>
            )}
          </div>
        ))}
    </div>
  );
}
