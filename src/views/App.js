import React, { Component } from 'react';
import MenuContent from '../components/MenuCenter'
import '../public/css/index.css'
import Menu from './Menu';
import Content from './Content';
import ModalView from '../components/Modals';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: true
    };
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
                <ModalView />              
              )
          }
        </div>
      </div>
    </div>
    );
  }
}

export default App;
