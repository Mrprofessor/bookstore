import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col } from 'reactstrap';
import './AddBook.css';

class AddBook extends Component {
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
    render () {
        return (
            <div>
                  <button title="Add book" className="btn-round blue" onClick={this.toggle}><span>+</span></button>  
                  {/* <Button className="btn-round blue" color="info" onClick={this.toggle}><span>+</span></Button>   */}
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="text-center" toggle={this.toggle}>Add Book </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row> 
                                <Label for="bookTitle" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="bookTitle" placeholder="Title of the book"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookAuthor" sm={2}>Author</Label>
                                <Col sm={10}>
                                    <Input type="text" name="author" id="bookAuthor" placeholder="Author"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookPublisher" sm={2}>Publisher</Label>
                                <Col sm={10}>
                                    <Input type="text" name="publisher" id="bookPublisher" placeholder="Publisher"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="pDate" sm={2}>Date</Label>
                                <Col sm={10}>
                                    <Input type="date" name="pdate" id="pDate" placeholder="Publication date"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookPrice" sm={2}>Price</Label>
                                <Col sm={10}>
                                    <Input type="number" name="price" id="bookPrice" placeholder=" ₹ Price"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookGenre" sm={2}>Genre</Label>
                                <Col sm={10}>
                                    <Input type="select" name="genre" id="bookGenre">
                                        <option>Fiction</option>
                                        <option>Romance</option>
                                        <option>History</option>
                                        <option>Westerns</option>
                                        <option>Fantasy</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookFormat" sm={2}>Format</Label>
                                <Col sm={10}>
                                    <Input type="select" name="format" id="bookFormat">
                                        <option>PDF</option>
                                        <option>KINDLE</option>
                                        <option>EPUB</option>
                                        <option>MOBI</option>
                                        <option>DOCX</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="bookDescription" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="bookDescription"/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.toggle}>Add</Button>{' '}
                        <Button color="warning" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>  
        );
    }
}

export default AddBook;

// •	Title
// •	Author
// •	ISBN
// •	Publication Date
// •	Publisher
// •	Price
// •	Genre(A list of Genres should be displayed for user to select)
// •	Format(A list of format should be displayed for user to select)
