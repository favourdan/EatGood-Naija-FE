import axios from "axios"
const baseUrl = "http://localhost:8080/"

const apiPost =(url ,data)=>{
    return (
        axios.post(`${baseUrl}${url}`,data)
    )
   
}
export default apiPost;