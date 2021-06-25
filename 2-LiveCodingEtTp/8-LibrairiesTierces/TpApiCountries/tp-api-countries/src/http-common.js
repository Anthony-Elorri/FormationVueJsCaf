const axios = require('axios').default;
export const HTTP = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/`,
  headers: {
    "Content-Type": "application/json",
  }
})