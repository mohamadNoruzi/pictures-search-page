import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID kiYxksaEE9CNF47d_ZY3pXjqZd6jjlrCSyNZzeUMA3c",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
