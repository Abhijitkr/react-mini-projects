import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMulti, setIsMulti] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);
  const [btnClass, setBtnClass] = useState("not-active");

  const handleSingle = (getDataId) => {
    setSelected(getDataId === selected ? null : getDataId);
  };

  const onBtnClick = () => {
    setIsMulti(!isMulti);
    if (!isMulti) setBtnClass("active");
    else setBtnClass("not-active");
  };

  const handleMultiple = (getDataId) => {
    var cpyMulti = [...multiSelection];
    var findIndex = cpyMulti.indexOf(getDataId);
    if (findIndex === -1) cpyMulti.push(getDataId);
    else cpyMulti.splice(findIndex, 1);
    setMultiSelection(cpyMulti);
  };

  return (
    <div>
      <div>
        <h1 className="text-center m-5 text-3xl font-bold">
          Accordian Project
        </h1>
      </div>
      <div className="accordian-wrapper">
        <div className="btn-grp">
          <button onClick={onBtnClick} className={btnClass}>
            {!isMulti ? "Enable" : "Disable"} Multi Selection
          </button>
        </div>
        {data &&
          data.length > 0 &&
          data.map((dataItem) => (
            <div key={dataItem.id} className="dataItem">
              <div
                className="title"
                onClick={() =>
                  isMulti
                    ? handleMultiple(dataItem.id)
                    : handleSingle(dataItem.id)
                }
              >
                <div>{dataItem.question}</div>
                <span>+</span>
              </div>
              {isMulti
                ? multiSelection.indexOf(dataItem.id) !== -1 && (
                    <div className="answer">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="answer">{dataItem.answer}</div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
}
