import React, { Component } from 'react';
import Book from './Book';
import BookData from './BookData.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var books = (typeof localStorage["bookList"] !== "undefined") ? JSON.parse(localStorage["bookList"]) : BookData.Books;

class BookList extends Component {
    render() {
        console.log(books);
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
            </div>
        );
    }
}

export default BookList; 