import { fetch } from "../../Util/request";

export const getData = async (city) => {
  try {
    const data = await fetch(`${city}`, "POST");
    return { data, error: false };
  } catch (err) {
    console.log(err);
    return { error: true };
  }
};
