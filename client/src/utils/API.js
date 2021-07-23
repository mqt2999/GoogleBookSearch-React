import axios from "axios"
export default {

getBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=" + process.env.REACT_APP_API_KEY);
},
saveBook: function (bookData){
    console.log("book data",bookData)
    return axios.post('/api/books/', bookData)
}
}