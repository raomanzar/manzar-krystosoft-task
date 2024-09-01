import axios from "axios";
import { configDataType, REQUEST_CONFIG } from "../../services/config";

export const AxiosGet = async <T>(url: string, config: configDataType) => {
  try {
    const response = await axios.get(url, REQUEST_CONFIG(config));
    return response.data as T;
  } catch (error) {
    throw error;
  }
};
