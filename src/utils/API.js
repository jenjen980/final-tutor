import axios from 'axios';


// FINISH ROUTES

export default{

    getTutor: function(name) {
        return axios.get(`/tutor`);
    },

}