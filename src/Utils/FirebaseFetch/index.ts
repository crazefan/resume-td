import axios from "axios";

export const fetchData = async (query: string): Promise<any[]> => {
  return await axios.get(`https://resume-75d42.firebaseio.com/${query}`).then(
    ({ data }) => [data, null],
    (error) => [null, error]
  );
};
