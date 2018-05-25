import React from 'react';
import ReactDrawer from 'react-drawer';
 
import 'react-drawer/lib/react-drawer.css';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'left',
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  render() {
    return (
      <div className="px-2 mr-2">
        {!this.state.open ? 
            <i className="fa fa-navicon iconMenu" onClick={this.toggleDrawer}></i>:
            <i className="fa fa-remove iconMenu" disabled={this.state.open}></i>
        }
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2>What a nice drawer !</h2>
        </ReactDrawer>
      </div>
    );
  }
}

export default App;