import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import BookModal from './BookModal';
import UpdateBook from './UpdateBook';


class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    delete(key) {
        this.props.delete(key);
    }
    
    render() {
        let book = this.props.book;
        return (
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card border-info" style={{ width: 100 + `%` }}>
                    <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                        <div className="card-text text-info">
                            {book.description.substring(0, 150)}...
                            <BookModal book={book}/>                              
                        </div>

                        <div className="row justify-content-end">

                            <UpdateBook book={book}/>
                            <Button style={{ marginLeft: 10 }} color="danger" onClick={this.toggle} size="sm">Delete</Button>

                            <Modal style={{ paddingTop: 15+`%`}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody style={{ textAlign: "center"}}>
                                    <h3>Are you sure ?</h3>
                                    <p className="text-danger"><b>Once you take the red pill..you can't go back.</b></p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={(e) => this.delete(book.ISBN, e)}>Yes</Button>
                                    <Button color="success" onClick={this.toggle}>No</Button>
                                </ModalFooter>
                            </Modal>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book; 