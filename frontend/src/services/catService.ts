import axios from 'axios';
const baseURL = process.env.REACT_APP_SERVER_URL;

const fetchSingleCat = async (id?: string) => {
   const response = await axios.get(`${baseURL}/${id}`);
   return { status: response.status, data: response.data };
};

const mostSearchedCats = async () => {
   const response = await axios.get(`${baseURL}`);
   return { status: response.status, data: response.data };
};

const searchCats = async (value: string) => {
   const response = await axios.post(`${baseURL}/search`, {
      query: value,
   });
   return { status: response.status, data: response.data };
};

const catService = { fetchSingleCat, mostSearchedCats, searchCats };

export default catService;
