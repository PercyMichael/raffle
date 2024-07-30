import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: 'http://192.168.1.116:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data', // Set content type for FormData
  },
});

export default axios;
