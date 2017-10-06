import React, { Component } from 'react';
import BookData from './BookData.json';
import SearchBar from './SearchBar'
import Book from './Book';
import AddBook from './AddBook';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var defaultBooks = (typeof localStorage["bookList"] !== "undefined") ? JSON.parse(localStorage["bookList"]) : BookData.Books;

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: defaultBooks
        };

        this.addBook = this.addBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.createItems = this.createItems.bind(this);
        this.searchedItems = this.searchedItems.bind(this);
        
    }
    addBook(book) {
        let currentBooks = this.state.books;
        currentBooks.push(book);
        defaultBooks = currentBooks;
        this.setState({
            books : currentBooks
        });
    }
    updateBook(book) {
        // console.log("I am in BookList component");
        let currentBooks = this.state.books;
        for (let item in currentBooks) {
            if(book.ISBN === currentBooks[item].ISBN) {
                currentBooks[item] = book;
                console.log(book);
            }
        }
        defaultBooks = currentBooks;
        this.setState({
            books: currentBooks
        });
    }
    deleteBook(key) {
        let filteredItems = this.state.books.filter(function (item) {
            if(item.ISBN === key) {
                console.log(`Book Deleted`);
            }
            return (item.ISBN !== key)
        });

        this.setState({
            books: filteredItems
        }); 
    }
    searchedItems(searchText) {
        if(searchText && searchText.length !== 0) {
            // console.log(searchText)
            let filteredBooks = defaultBooks.filter(function(book) {
                let bookText = book.title.substring(0, searchText.length);
                if(bookText.toLowerCase() === searchText.toLowerCase()){
                    return true;
                }
                return 0;
            });
            // console.log(filteredBooks);
            this.setState({
                books : filteredBooks
            })
        } else {
            this.setState({
                books : defaultBooks
            })
        }
    }

    createItems(book) {
        return <Book key={book.ISBN} book={book} delete={this.deleteBook} update={this.updateBook} />
    }
    
    render() {
        // console.log(this.state.books);
        let bookArray = this.state.books.map(this.createItems);
        return (
            <div  className="container">
                <SearchBar books={this.state.books} search={this.searchedItems}/>
                <div id="BookData" className="row align-items-center">
                    {bookArray} 
                 </div>
                <AddBook add={this.addBook}/>
            </div>
        );
    }
}

export default BookList; 