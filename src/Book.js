import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Book extends Component {
    render() {
        // console.log();
        let book = this.props.book;
        return (
            <div className="card" style={{ width: 20 + `rem`}}>
                <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">Some quick example text to build on the
                         card title and make up the bulk of the card's content.
                    </p>
                    <a href="" className="card-link">Update book</a>
                    <a href="" className="card-link">Delete book</a>
                </div>
            </div> 
        );
    }
}

export default Book; 