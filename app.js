const axios = require('axios')

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;




const books = {
    "1984": "Orwell",
    "Don Quixote": "Miguel de Cervantes",
    "Ulysses": "James Joyce",
    "The Great Gatsby": "F. Scott Fitzgerald",
    "Moby Dick": "Herman Melville",
    "Hamlet": "William Shakespeare"
};

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/title/:books', (req, res) => {
  
    axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:'+req.params.books).then(result=> {
        console.log(result);
    res.send({express: result.data.items[0].volumeInfo.authors[0]});

    
});
});
    
