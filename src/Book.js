import React, { Component } from 'react';
import BookModal from './BookModal';

class Book extends Component {
    render() {
        let book = this.props.book;
        return (
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card border-info" style={{ width: 100 + `%` }}>
                    <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                        <div className="card-text text-info paragraph">
                            {book.description.substring(0, 150)}...
                            <BookModal book={book}/>                              
                        </div>
                        <div className="row justify-content-end">
                            <button className="btn btn-warning btn-sm">Update</button>
                            <button style={{ marginLeft: 10 }} className="btn btn-danger btn-sm" >
                                Delete
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
             
        );
    }
}

export default Book; 