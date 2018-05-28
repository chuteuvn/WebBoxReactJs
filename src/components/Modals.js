import React, { Component } from 'react';
import { ModalBody, ModalHeader, ModalFooter, Modal, Button } from 'reactstrap';
import ModalBodyView from './ModalBody';

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
        <Button color="danger" onClick={this.toggle}>Show Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          <ModalHeader toggle={this.toggle}>
            <p className="pull-left">Display Option</p>
            <Button color="primary" onClick={this.toggle} className="float-right">Save</Button>            
          </ModalHeader>
          <ModalBody>
            <ModalBodyView />
          </ModalBody>
          <ModalFooter>
            <p>* Some tools will only display for 1 browser session (session length depends on individual browser settings).
                Click here to refresh browser or see our FAQ.</p>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
};
