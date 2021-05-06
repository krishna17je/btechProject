import axios from "axios";

export const fetch = async (uri, method, data) => {
  const urlPrefix = process.env.REACT_APP_BACKEND_URL;

  const response = await axios({
    method,
    url: `${urlPrefix}/${uri}`,
    data,
  });
  if (response.status < 300 && response.status >= 200) {
    return response.data;
  }
  throw response;
};
