import { makeRequest } from "../../queries/makerequest.js"

//test
makeRequest.get("/products").then((res) => {
      console.log(res.data);
}).catch((err) => {
console.log(err)  
})
