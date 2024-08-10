import axios from 'axios';




const baseUrl = axios.create({
  baseURL: 'http://localhost:4005/',
});

export default baseUrl;
