// Loading process.env as ENV interface

import { Config, ENV } from "../types/env.type";

export const getConfig = (): ENV => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
  };
};

export const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
