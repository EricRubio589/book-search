import React from 'react';
import SearchForm from './searchForm';


function Header(props) {
    return (
        <div>
            <h1>Google Book Search</h1>
            <SearchForm setSearchTerm={props.setSearchTerm}/>

        </div>
    )
}

export default Header;