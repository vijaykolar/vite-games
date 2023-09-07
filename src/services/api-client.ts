import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "11c85b844f0e412eb7cf38d8f678ef93",
    }
})

