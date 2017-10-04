import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardLink } from 'reactstrap';

class BookModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        // console.log("calling ShowBook");
        return (
            <div>
                <CardLink href="#" onClick={this.toggle}><h6>read more</h6></CardLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} backdropTransition={{ timeout: 10 }} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.book.title}</ModalHeader>
                    <ModalBody>
                        <h6 className="card-subtitle mb-2 ">
                            Author : 
                            <span className="text-muted">
                                 {this.props.book.author}
                            </span>
                        </h6>
                        <hr />
                        {this.props.book.description}
                    </ModalBody>                       
                    <ModalFooter>
                        <h6 className="card-subtitle mb-2 text-muted">Price : <b>₹</b> {this.props.book.price}</h6>
                    </ModalFooter>
                    <ModalFooter>                         
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default BookModal;