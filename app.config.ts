import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "event-app-httpapi-repro",
  slug: "event-app-httpapi-repro",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  ios: {
    bundleIdentifier: "com.anonymous.eventapphttpapirepro",
  },
  android: {
    package: "com.anonymous.eventapphttpapirepro",
  },
  experiments: {
    reactCompiler: true,
  },
};

export default config;
