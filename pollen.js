import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.tomorrow.io/v4',
    headers: { 
        Authorization: 'Bearer ufe5SN43xwtScph80XfXrCX8jssxsApI',
        'Accept': 'application/json',
        'Accept-Encoding' : 'gzip',
    
    }
});
