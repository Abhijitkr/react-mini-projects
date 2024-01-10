import Tabs from "./Tabs";
import "./tabs.css";

export default function TabParent() {
  function RandomContent() {
    return <h1>Some Random Content</h1>;
  }

  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 Content</div> },
    { label: "Tab 2", content: <div>Tab 2 Content</div> },
    { label: "Tab 3", content: <RandomContent /> },
  ];

  function handleOnChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <div className="tabs-parent-wrapper">
      <Tabs tabs={tabs} onChange={handleOnChange} />
    </div>
  );
}
