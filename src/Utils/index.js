import axios from "axios";

export const fetchItems = async (queryName) => {
  const result = await axios(
    `https://resume-75d42.firebaseio.com/${queryName}`
  );

  return Object.keys(result.data).map((key) => result.data[key]);
};
