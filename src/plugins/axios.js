import axios from 'axios';

const movieAxios =axios.create({
    baseURL:"https://yts.mx/api/v2/"
});


export default movieAxios;