import { useState } from "react";

export default function Tabs({ tabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <>
      <div className="tabs-heading">
        {tabs.map((tabItem, index) => (
          <div
            className={`label ${currentTabIndex === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
          >
            {tabItem.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </>
  );
}
