import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend129.herokuapp.com/'
});

export default instance;