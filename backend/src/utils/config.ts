import { config } from 'dotenv';
config();

const PORT = process.env.PORT;
const CAT_API_KEY = process.env.CAT_API_KEY as string;
const BASE_API_URL = process.env.BASE_API_URL as string;

export default { PORT, CAT_API_KEY, BASE_API_URL };
