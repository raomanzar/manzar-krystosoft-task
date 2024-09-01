export const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export type configDataType = {
  token?: string;
  contentType?: "application/json";
};

export const REQUEST_CONFIG = (configData: configDataType) => ({
  headers: {
    Authorization: configData.token ? configData.token : "",
    "Content-Type": "application/json",
  },
});
