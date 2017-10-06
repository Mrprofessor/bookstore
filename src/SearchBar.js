import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.changeSearch = this.changeSearch.bind(this);
        this.changeFilterGenere = this.changeFilterGenere.bind(this);
        this.changeFilterFormat = this.changeFilterFormat.bind(this);
    }

    changeSearch(event) {
        // console.log(event.target.value, this._inputGenre.value, this._inputFormat.value);
        this.props.search(event.target.value, this._inputGenre.value, this._inputFormat.value);
    }
    changeFilterGenere(event) {
        // console.log(this._inputSearch.value, event.target.value, this._inputFormat.value);
        this.props.search(this._inputSearch.value, event.target.value, this._inputFormat.value);
    }
    changeFilterFormat(event) {
        // console.log(this._inputSearch.value, this._inputGenre.value, event.target.value);
        this.props.search(this._inputSearch.value, this._inputGenre.value, event.target.value);
    }

    render() {
        return(
            <nav className="navbar navbar-light bg-light row">
                <div className="col-lg-6">
                    <input className="form-control mr-sm-2" onChange={this.changeSearch} ref={(a) => this._inputSearch = a}
                        type="text" placeholder="Search Books" aria-label="Search" />
                </div>
                <div className="col-lg-3">
                    <select name="genre" id="bookGenre" className="form-control" onChange={this.changeFilterGenere}
                    ref={(a) => this._inputGenre = a} >

                        <option>GENRE</option>
                        <option>Fiction</option>
                        <option>Romance</option>
                        <option>History</option>
                        <option>Westerns</option>
                        <option>Fantasy</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <select name="format" id="bookFormat" className="form-control" onChange={this.changeFilterFormat}
                    ref={(a) => this._inputFormat = a} >

                        <option>FORMAT</option>
                        <option>PDF</option>
                        <option>KINDLE</option>
                        <option>EPUB</option>
                        <option>MOBI</option>
                        <option>DOCX</option>
                    </select>
                </div>
            </nav>
        );
    }
}

export default SearchBar;