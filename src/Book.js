import React, { Component } from 'react';
import BookModal from './BookModal';

class Book extends Component {
    render() {
        let book = this.props.book;
        return (
            <div className="col">
                <div className="card border-info" style={{ width: 20 + `rem` }}>
                    <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                        <div className="card-text">
                            {book.description.substring(0, 150)}...
                            <BookModal book={book}/>                              
                            {/* <a href="" className="card-link">..more</a> */}
                        </div>
                         <a href="" className="card-link">Update book</a>
                          <a href="" className="card-link">Delete book</a>   
                    </div>
                </div>
            </div>
             
        );
    }
}

export default Book; 