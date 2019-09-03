import React from 'react';
import './searchForm.css';

class SearchForm extends React.Component {
    

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.setSearchTerm(event.target.itemToAdd.value, event.target.printType.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <label for='itemToAdd'>Search term: </label>
                    <input name='itemToAdd' id='itemToAdd'></input>
                    <label for='printType'>Print type:</label>
                    <select name='printType' id='printType'>
                        <option value='All'>All</option>
                        <option value='Books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;