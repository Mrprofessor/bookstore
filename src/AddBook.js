import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody,Button } from 'reactstrap';
import './AddBook.css';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        let singleBook = {
            "title": this._inputTitle.value,
            "author": this._inputAuthor.value,
            "ISBN": Date.now(),
            "pdate": this._inputPdate.value,
            "publisher": this._inputPublisher.value,
            "price": this._inputPrice.value,
            "genre": this._inputGenre.value,
            "format": this._inputFormat.value,
            "description": this._inputDesc.value
        };
        console.log(singleBook);
        this.props.add(singleBook);
        e.preventDefault();
        this.toggle();
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render () {
        return (
            <div>
                  <button title="Add book" className="btn-round blue" onClick={this.toggle}><span>+</span></button>  
                  {/* <Button className="btn-round blue" color="info" onClick={this.toggle}><span>+</span></Button>   */}
                  <Modal style={{ paddingTop: 7 + `%` }} isOpen={this.state.modal} fade={true} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
                    <ModalBody>
                        <form className="" onSubmit={this.addItem}>
                            <div className="row form-group">
                                <label htmlFor="bookTitle" className="col-sm-2 col-form-label">Title</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputTitle = a}
                                    type="text" name="title" id="bookTitle" placeholder="Title of the book" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookAuthor" className="col-sm-2 col-form-label">Author</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputAuthor = a}
                                    type="text" name="author" id="bookAuthor" placeholder="Author" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookPublisher" className="col-sm-2 col-form-label">Publisher</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPublisher = a} 
                                    type="text" name="publisher" id="bookPublisher" placeholder="Publisher" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="pDate" className="col-sm-2 col-form-label">Date</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPdate = a} 
                                    type="date" name="pdate" id="pDate" placeholder="Publication date" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookPrice" className="col-sm-2 col-form-label">Price</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPrice = a} 
                                    type="number" name="price" id="bookPrice" placeholder=" ₹ Price" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookGenre" className="col-sm-2 col-form-label">Genre</label>
                                <div className="col col-sm-10">
                                    <select name="genre" id="bookGenre" className="form-control" ref={(a) => this._inputGenre = a} >
                                        <option>Fiction</option>
                                        <option>Romance</option>
                                        <option>History</option>
                                        <option>Westerns</option>
                                        <option>Fantasy</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookFormat" className="col-sm-2 col-form-label">Format</label>
                                <div className="col col-sm-10">
                                    <select name="format" id="bookFormat" className="form-control" ref={(a) => this._inputFormat = a} >
                                        <option>PDF</option>
                                        <option>KINDLE</option>
                                        <option>EPUB</option>
                                        <option>MOBI</option>
                                        <option>DOCX</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookDescription" className="col-sm-2 col-form-label">Description</label>
                                <div className="col col-sm-10">
                                    <textarea ref={(a) => this._inputDesc = a} rows="5"
                                    name="description" id="bookDescription" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button type="submit" color="info">Add</Button>
                                <Button onClick={this.toggle} color="warning">Cancel</Button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>  
        );
    }
}

export default AddBook;


