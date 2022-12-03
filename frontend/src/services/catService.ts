import axios from 'axios';
const baseURL = process.env.REACT_APP_SERVER_URL;

const fetchSingleCat = async (id?: string) => {
   const response = await axios.get(`${baseURL}/${id}`);
   return { status: response.status, data: response.data };
};

const catService = { fetchSingleCat };

export default catService;
