import React, { Component } from 'react';

class Book extends Component {
    render() {
        // console.log();
        let book = this.props.book;
        return (
            <div className="col-sm-4">
                <div className="card border-info" style={{ width: 20 + `rem` }}>
                    <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                        <p className="card-text">
                            {book.description.substring(0, 100)}
                            <a href="" className="card-link">..more</a>
                        </p>
                        <a href="" className="card-link">Update book</a>
                        <a href="" className="card-link">Delete book</a>
                    </div>
                </div>
            </div>
             
        );
    }
}

export default Book; 