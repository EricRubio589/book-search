import React from 'react';
import Header from './header';
import ResultsList from './resultsList';

const key = 'AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE';

class BookApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  setSearchTerm = (term, printType) => {
    console.log(this.state.searchTerm)
    this.fetchData(term, printType)

  }  

  fetchData = (term, printType) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${term}&printType=${printType}&key=${key}`;
    fetch(url).then(response => {
      if(!response.ok) {
        throw new Error('Oops, there seems to be a problem fetching from the server')
      }
      return response;
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({data:responseJson})
      })
    }


  render() {
  return (
    <main className='bookApp'>
        <Header setSearchTerm={this.setSearchTerm}/>
        <ResultsList
          data={this.state.data} 
        />
    </main>
  );
  }
}

export default BookApp;