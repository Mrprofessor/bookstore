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
    searchedItems(searchText, SearchGenre, SearchFormat) {
        console.log(searchText, SearchGenre, SearchFormat);

        if (searchText && searchText.length !== 0) {
            let filteredBooks = defaultBooks.filter(function(book) {
                let bookText = book.title.substring(0, searchText.length);
                if(bookText.toLowerCase() === searchText.toLowerCase())
                {
                    if (SearchGenre !== 'GENRE') {
                        if(SearchGenre === book.genre){
                            return true;
                        } else {
                            return false;
                        }
                    }
                    
                    if (SearchFormat !== 'FORMAT') {
                        if (SearchFormat === book.format) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return true;
                }
                return 0;
            });
            // console.log(filteredBooks);
            this.setState({
                books : filteredBooks
            })
        } else if (searchText.length === 0 && SearchGenre !== "GENRE") {
            let filteredBooks = defaultBooks.filter(function (book) {
                if (SearchGenre === book.genre) {
                    if (SearchFormat !== 'FORMAT') {
                        if (SearchFormat === book.format) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return true;
                }
                return 0;
            });
            this.setState({
                books: filteredBooks
            })
        } else if (searchText.length === 0 && SearchFormat !== "FORMAT") {
            let filteredBooks = defaultBooks.filter(function (book) {
                if (SearchFormat === book.format) {
                    if (SearchGenre !== 'GENRE') {
                        if (SearchGenre === book.genre) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return true;
                }
                return 0;
            });
            this.setState({
                books: filteredBooks
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