import React, { Component } from 'react';
import { ModalBody, ModalHeader, ModalFooter, Modal, Button } from 'reactstrap';

export default class Modals extends Component {
  constructor(props){
    super(props);
    this.state={
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
              Title Modal
          </ModalHeader>
          <ModalBody>
            Hello Word
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Read More</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
};
