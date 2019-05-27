import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Search.js'

class App extends Component {
state = {
    data: null,
    search: null,
    result: null,
    text: "Enter a book and I'll tell you the author!"
  };


    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async (data) => {
    console.log('/title/'+data);
    const response = await fetch('/title/'+data);
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };



handleSearch = (data) =>{
  this.setState({
      search: data +":"
  })
    this.callBackendAPI(data)
    .then(res => this.setState({ result: res.express }))
    .catch(err => console.log(err));
  
  
}

  render() {
    return (
      <div>


        {/* // Render the newly fetched data inside of this.state.data  */}

        <SearchBar searchFill = {this.handleSearch}/>
        
        <h2>Enter An Author and I'll Tell You The Name <p></p>
        {this.state.search} {this.state.result}</h2>

      </div>
    );
  }
}

export default App;
