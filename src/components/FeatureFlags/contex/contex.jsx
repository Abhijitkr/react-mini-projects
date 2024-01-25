import { createContext, useEffect, useState } from "react";
import getFeatureFlags from "../data";
export const FeatureFlagContext = createContext(null);
export default function FeatureFlagContextState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFeature, setEnableFeature] = useState({});

  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const response = await getFeatureFlags();
      setEnableFeature(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlag();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enableFeature }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
