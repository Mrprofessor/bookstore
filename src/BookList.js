import React, { Component } from 'react';
import Book from './Book';
import BookData from './BookData.json';
import AddBook from './AddBook';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var defaultBooks = (typeof localStorage["bookList"] !== "undefined") ? JSON.parse(localStorage["bookList"]) : BookData.Books;

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: defaultBooks
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.createItems = this.createItems.bind(this);
        
    }
    
    deleteItem(key) {
        let filteredItems = this.state.books.filter(function (item) {
            if(item.ISBN === key) 
                console.log(item);
            return (item.ISBN !== key)
        });

        this.setState({
            books: filteredItems
        });
        
    }

    createItems(book) {
        return <Book key={book.ISBN} book={book} delete={this.deleteItem} />
    }
    
    render() {
        console.log(this.state.books);
        let bookArray = this.state.books.map(this.createItems);
        return (
            <div  className="container">
                <div id="BookData" className="row align-items-center">
                    {bookArray} 
                 </div>
                <AddBook />
            </div>
        );
    }
}

export default BookList; 