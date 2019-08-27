import React from 'react';
import Header from './header';
import ResultsList from './resultsList';

const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE`;
const key = 'AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE';
const titles = [];

class BookApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: null,
    };
  }

  componentDidMount() {
    fetch(url).then(response => {
      if(!response.ok) {
        throw new Error('Oops, there seems to be a problem fetching from the server')
      }
      return response;
    })
      .then(response => response.json())
      // .then(responseJson => responseJson.map(res) this.setState({ data: responseJson.items[3].volumeInfo.title}))  
      // .then(responseJson => this.setState({data: responseJson}))
      .then(responseJson => {
        this.setState({data:responseJson.items.map(item=>item.volumeInfo.title)})
      })
    }

  render() {
  return (
    <main className='bookApp'>
        <Header />
        <p>{this.state.data.length}</p>
        <ResultsList titles={this.state.data}/>
    </main>
  );
  }
}

export default BookApp;