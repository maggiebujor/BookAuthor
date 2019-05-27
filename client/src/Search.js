
import React, { Component } from 'react';

import { Input } from 'antd';
import "./App.css";


const Search = Input.Search;



class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: ""
        }
      }





  render() {
    return (
        <div>
<p></p>
    <Search
      placeholder="Search for a Book"
      enterButton="Search"
      size="large"
      onSearch={value => {
            
            this.props.searchFill(value)
            this.setState({book: value})
      }
        }
    
    
    



    
    />
<p></p>

  </div>


        
    );
  }
}

export default SearchBar;
