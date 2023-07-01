import axios from "axios";
//axios is a library to making API requests

//you can just add it without the first part of the url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
