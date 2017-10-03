// import React,{ Component } from 'react';
// import Book from './Book';
// import BookData from './BookData.json';

// class BookList extends Component {
//     render() {
//         // console.log(BookData.Books);
//         return (
//                     <div>
//                         <Book  books={BookData.Books}/>
//                     </div>
//         );
//     }
// }

// export default BookList;

import React, { Component } from 'react';
import Book from './Book';
import BookData from './BookData.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class BookList extends Component {
    render() {
        console.log(BookData.Books);
        let books = BookData.Books;
        let updatedArray = books.map(function (book) {
            return (
                <Book book={book} />
            );
        });
        return (
            <div className="container">
                 {updatedArray} 
            </div>
        );
    }
}

export default BookList; 