import React, { Component } from 'react';
import Book from './Book';
import BookData from './BookData.json';
import './BookList.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class BookList extends Component {
    render() {
        console.log(BookData.Books);
        let books = BookData.Books;
        let updatedArray = books.map(function (book) {
            return (
                <Book key={book.ISBN} book={book} />
            );
        });
        return (
            <div  className="container">
                <div id="BookData" className="row align-items-center">
                    {updatedArray} 
                 </div>
            </div>
        );
    }
}

export default BookList; 