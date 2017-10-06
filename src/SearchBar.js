import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(event) {
        // console.log(event.target.value);
        this.props.search(event.target.value);

        // event.preventDefault();
    }

    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                {/* <form className="form-inline"> */}
                    <input className="form-control mr-sm-2" onChange={this.changeSearch}
                    type="text" placeholder="Search Books" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                {/* </form> */}
            </nav>
        );
    }
}

export default SearchBar;