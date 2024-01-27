import { useContext } from "react";
import Accordion from "../Accordian";
import Searching from "../AutoCompleteSearch/Searching";
import DarkLightMode from "../DarkLightMode";
import { FeatureFlagContext } from "./contex/contex";

export default function FeatureFlags() {
  const { loading, enableFeature } = useContext(FeatureFlagContext);

  const featureFlagComponents = [
    {
      key: "Accordian",
      component: <Accordion />,
    },
    {
      key: "AutoComplete",
      component: <Searching />,
    },
    {
      key: "DarkLightMode",
      component: <DarkLightMode />,
    },
  ];

  if (loading) <h1>Loading...</h1>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Feature Flags</h1>
      {featureFlagComponents.map((flagItem) =>
        enableFeature[flagItem.key] ? flagItem.component : null
      )}
    </div>
  );
}
