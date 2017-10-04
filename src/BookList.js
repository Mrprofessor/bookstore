import React, { Component } from 'react';
import Book from './Book';
import BookData from './BookData.json';
import './BookList.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class BookList extends Component {
    render() {
        // console.log(BookData.Books);
        let books = BookData.Books;
        let bookArray = books.map(function (book) {
            return (
                <Book key={book.ISBN} book={book} />
            );
        });
        return (
            <div  className="container">
                <div id="BookData" className="row align-items-center">
                    {bookArray} 
                 </div>
                <button title="Add book" className="btn-round blue"><span>+</span></button>
            </div>
        );
    }
}

export default BookList; 