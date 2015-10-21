import Axios from 'axios';

export default {
    getTussit: function() {
        return Axios.get('/api/tussi').then((response) => {
            return response.data;
        });
    }
};
