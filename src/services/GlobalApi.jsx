import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='9a18c1b4f922278a750ac13a7b780f58'
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);



export default {
    getTrendingVideos
}