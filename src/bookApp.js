import React from 'react';
import Header from './header';
import ResultsList from './resultsList';

const key = 'AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE';

class BookApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      authors: []
    };
  }
  
  setSearchTerm = (term) => {
    console.log(this.state.searchTerm)
    this.fetchData(term)
  }  

  fetchData = (term) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${term}&key=${key}`;
    fetch(url).then(response => {
      if(!response.ok) {
        throw new Error('Oops, there seems to be a problem fetching from the server')
      }
      return response;
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({titles:responseJson.items.map(item=>item.volumeInfo.title)})
      })
      .then(responseJson => {
        this.setState({authors:responseJson.items.map(item=>item.volumenInfo.authors)})
      })
    }


  render() {
  return (
    <main className='bookApp'>
        <Header setSearchTerm={this.setSearchTerm}/>
        <p>{this.state.titles.length}</p>
        <ResultsList 
        titles={this.state.titles}
        authors={this.state.authors}/>
        {console.log(this.data)}
    </main>
  );
  }
}

export default BookApp;