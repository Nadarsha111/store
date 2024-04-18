import axios from "axios";


const makeRequest = axios.create({
      baseURL: "https://fakestoreapi.com",
      headers: {
            "Content-Type": "application"
      }
});

export default makeRequest;

