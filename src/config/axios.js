import axios from 'axios';

const userAxios = axios.create({
    baseURL: ProcessingInstruction.env.REACT_APP_BACKEND_URL
});

export default userAxios;