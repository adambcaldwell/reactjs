import axios from 'axios';

/**
 * Unsplash API configuration for axios
 *
 * @author adam.caldwell
 */
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID AUTH_TOKEN'
  }
});
