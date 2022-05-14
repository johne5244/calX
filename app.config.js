const config1 = {
  name: "calX",
  slug: "calX",
  version: "1.10.1",
  orientation: "portrait",
  icon: "./assets/Icon.png",
  primaryColor: "#707070",
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.calx.calx",
    versionCode: 2,
  },
  web: {
    favicon: "./assets/Icon.png",
  },
  description: "Calculator",
};

module.exports = () => {
  return {
    ...config1,
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#D9CCCC",
    },
  };
};
