import axios from "axios";

export const fetchData = async (searchParams) => {
  const options = {
    method: "GET",
    url: "https://zillow69.p.rapidapi.com/search",
    params: { location: searchParams.get("search") },
    headers: {
      "X-RapidAPI-Key": "3a8628628cmsh60b47b1ffa07d2dp14f95bjsnf9443be9ed89",
      "X-RapidAPI-Host": "zillow69.p.rapidapi.com",
    },
  };

  const { data } = await axios.request(options);
  console.log("hii");
  return data.props;
};
