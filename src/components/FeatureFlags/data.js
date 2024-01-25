const FeatureFlagComponents = {
  Accordian: true,
  AutoComplete: false,
  DarkLightMode: true,
};

function getFeatureFlags() {
  return new Promise((resolve, reject) => {
    if (FeatureFlagComponents) setTimeout(resolve(FeatureFlagComponents), 500);
    else reject("Something went wrong");
  });
}

export default getFeatureFlags;
