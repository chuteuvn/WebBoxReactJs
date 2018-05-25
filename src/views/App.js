import React, { Component } from 'react';
import MenuContent from '../components/MenuCenter'
import '../public/css/index.css'
import Menu from './Menu';
import Modal from '../components/Modals';
import Content from './Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }
  returnModal(){
    <Modal onClick={this.props.toggle} />
  }

  render() {
    return (<div className="body-color">
      <Menu />
      <div className="container">
        <div className="row my-4">
          <MenuContent onChange={(item) => {
            this.setState({
              click: item.label == 'Basic Setting'
            })
          }} />
        </div>
        <div className="row">
          {
            this.state.click ? (
                  <Content />
            )
              : (
                this.returnModal()                
              )
          }
        </div>
      </div>
    </div>
    );
  }
}

export default App;
