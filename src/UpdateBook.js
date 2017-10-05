import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class UpdateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false
        };
        this.toggle = this.toggle.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(e) {
        let singleBook = {
            "title": this._inputTitle.value,
            "author": this._inputAuthor.value,
            "ISBN": this.props.book.ISBN,
            "pdate": this._inputPdate.value,
            "publisher": this._inputPublisher.value,
            "price": this._inputPrice.value,
            "genre": this._inputGenre.value,
            "format": this._inputFormat.value,
            "description": this._inputDesc.value
        };
        this.props.update(singleBook);
        this.toggle();
        e.preventDefault();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        console.log(this.state.modal);
    }
    render() {
        // console.log(this.props.book)
        return(
            <div>
                <Button color="warning" onClick={this.toggle} size="sm">Update</Button>
                <Modal style={{ paddingTop: 3 + `%` }} isOpen={this.state.modal} fade={true} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Book</ModalHeader>
                    <ModalBody>
                        <form className="" onSubmit={this.updateItem}>
                            <div className="row form-group">
                                <label htmlFor="bookTitle" className="col-sm-2 col-form-label">Title</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputTitle = a}
                                        type="text" name="title" id="bookTitle" defaultValue ={this.props.book.title} className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookAuthor" className="col-sm-2 col-form-label">Author</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputAuthor = a}
                                        type="text" name="author" id="bookAuthor" defaultValue={this.props.book.author} className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookPublisher" className="col-sm-2 col-form-label">Publisher</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPublisher = a}
                                        type="text" name="publisher" id="bookPublisher" defaultValue={this.props.book.publisher} className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="pDate" className="col-sm-2 col-form-label">Date</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPdate = a}
                                        type="date" name="pdate" id="pDate" defaultValue={this.props.book.pdate} className="form-control"></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="bookPrice" className="col-sm-2 col-form-label">Price</label>
                                <div className="col col-sm-10">
                                    <input ref={(a) => this._inputPrice = a}
                                        type="number" name="price" id="bookPrice" defaultValue={this.props.book.price} className="form-control"></input>
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
                                    <textarea ref={(a) => this._inputDesc = a} 
                                        defaultValue={this.props.book.description} rows="7"
                                        name="description" id="bookDescription" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button type="submit" className="btn btn-info">Update</Button>
                                <Button onClick={this.toggle} className="btn btn-warning">Cancel</Button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>  
        );
    }
}

export default UpdateBook;