import React from 'react';
import SearchForm from './searchForm';
import './header.css';


function Header(props) {
    return (
        <div>
            <section className="mainBanner">
            <h1>Google Book Search</h1>
            </section>
            <SearchForm setSearchTerm={props.setSearchTerm}/>

        </div>
    )
}

export default Header;