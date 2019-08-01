import axios from "axios";

export default { // i will import this folder. And the component or app will see automaticly.
                 // import API from "../utils/API"; going to be enough.
  getSearchedBooks: function(query) { // geting books from googleapi
    console.log("Book Search Stared");
    console.log("Your Query : " + query);
    return axios.get("/api/searchedBooks/" + query);
  },
  getSavedBooks: function(){ // getting books from database
    console.log("Saved books Loaded");
    return axios.get("/api/savedBooks");
  },
  deleteSavedBook: function(id) { // Delete one book from saved page
    console.log("Saved book deleted");
    console.log("Your Deleted Book ID : " +id);
    return axios.delete("/api/savedBooks/" + id); 
  },
  saveBook: function(bookData) { // Save one book from Searched book page
    console.log("One Book saved");
    console.log("Your Saved Book :\n");
    console.log(bookData);
    return axios.post("/api/searchedBooks", bookData); 
  }
};



