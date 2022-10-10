import axios from "axios";

const apiClient=axios.create({
    baseURL: 'https://zoo-animal-api.herokuapp.com',
    timeout: 1000,
    headers: {}
  });

export default apiClient;