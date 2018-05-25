import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navItems: [
        {
          label: 'Basic Setting',
          active: true
        },
        {
          label: 'Display Option',
          active: false
        }
      ]
    };
  }

  renderMenuItems() {
    return this.state.navItems.map(item => {
      return <li className={'nav-item ' + (item.active ? 'nav-active' : '')} 
        onClick={() => {
          const navItems = this.state.navItems.map(i => {
            i.active = i == item;
            return i;
          })
          this.setState({ navItems }, () => {
            this.props.onChange(item)
          })
        }}>
        <a className="nav-link" href="#">{item.label}</a>
      </li>

    })
  }

  render() {

    return (
      <div className="row">
        <div className="col-12" id="setting-menu">
          <ul className="nav nav-tabs tabs-wrapper">
            {
              this.renderMenuItems()
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
