import React, { Component } from 'react';
import { Button, Modal, CardLink } from 'reactstrap';

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
                <Modal style={{paddingTop: 5 +`%`}} isOpen={this.state.modal} toggle={this.toggle} backdropTransition={{ timeout: 10 }} className={this.props.className}>
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.book.title}</h5>
                        <button type="button" className="close" onClick={this.toggle} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row" style={{ paddingTop: `10px` }}>
                            <div className="col">
                                <h6 className="card-subtitle mb-2 text-muted"><b>Author : </b>{this.props.book.author}</h6>
                                <h6 className="card-subtitle mb-2 text-muted"><b>ISBN : </b>{this.props.book.ISBN}</h6>
                            </div>
                            <div className="col text-right">
                                <h6 className="card-subtitle mb-2 text-muted"><b>Publisher : </b>{this.props.book.publisher}</h6>
                                <h6 className="card-subtitle mb-2 text-muted"><b>Date : </b>{this.props.book.pdate}</h6>
                            </div>
                        </div>
                        <hr />
                        <p>{this.props.book.description}</p>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <h6 className="card-subtitle mb-2 text-muted"><b>Genre : </b>{this.props.book.genre}</h6>
                                <h6 className="card-subtitle mb-2 text-muted"><b>Format : </b>{this.props.book.format}</h6>
                            </div>
                            <div className="col text-right">
                                <h6 className="card-subtitle mb-2 text-muted"><b>Price : ₹</b> {this.props.book.price}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">                        
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default BookModal;

// •	Title
// •	Author
// •	ISBN
// •	Publication Date
// •	Publisher
// •	Price
// •	Genre(A list of Genres should be displayed for user to select)
// •	Format(A list of format should be displayed for user to select)