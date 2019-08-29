import React from 'react';

class SearchForm extends React.Component {
    

    // buttonWasClicked () {
    //     event.preventDefault();
    //     const {}
    // }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.setSearchTerm(event.target.itemToAdd.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <p>Search Here:</p>
                    <input name='itemToAdd'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;