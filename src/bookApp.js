import React from 'react';
import Header from './header';


const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE`;
const key = 'AIzaSyAYOS5NQVTj3USuL4mhtaqSWs8W2kHnxLE';
var titles = [];

class BookApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      publishers: []
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
        const titles = []
        for (let i=0; i < Object.keys(responseJson.items).length; i++) {
          titles.push(responseJson.items[i].id)
          console.log(responseJson.items[i].volumeInfo.title)
        }
      })
    }

  render() {
  return (
    <main className='bookApp'>
        <Header />
        <p>{titles}</p>
        {console.log({titles})}
    </main>
  );
  }
}

export default BookApp;