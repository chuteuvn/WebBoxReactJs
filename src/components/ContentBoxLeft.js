import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import EditorBox from './EditorBox';

export default class ContentBoxLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
          btnItems: [
            {
                id: 'btn-clasic',
                label: 'Clasic',
                active: true
            },
            {
                id:'btn-flat',
                label: 'Flat',
                active: false
            },
            {
                id: 'btn-modern',
                label: 'Modern',
                active: false
            }
          ]
        };
      }

    renderButton() {
        return this.state.btnItems.map(item => {
            return <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" 
                    className={'btn-choose-style ' + (item.active ? 'btn-active' : '')} 
                    id={item.id}
                    >
                        {item.label}
                </button>
            </div>    
        })
      }
    

  render() {
    return (
        <div className="box-content">
            <div className="scroll-wrapper">
                <Scrollbars style={{ height: 550 }}>
                    <div className="first-step-setting">
                        <div className="step-number">
                            <div className="numberItem">1</div>
                        </div>
                        <span>Choose Box Style</span>                                            
                    </div>    
                    <div className="properties-row btn-group">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        {
                            this.renderButton()
                        }
                        </div>
                    </div>
                    <div className="secondary-step-setting">
                        <div className="step-number">
                            <div className="numberItem">2</div>
                        </div>
                        <span>Customize Message</span>                                            
                    </div>    
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Your Title Here" />
                    </div>
                    <div className="form-group">
                        <label>Massage</label>
                        <textarea className="form-control" rows="5" placeholder="Promote your news, deals and specials here."></textarea>
                    </div>
                    <div className="form-group">
                        <label>Link to Page (URL)</label>
                        <input type="text" className="form-control" placeholder="Eg http://yourwebsite.com" />
                    </div>
                    <div className="form-check-box">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />Open link on new tab
                        </label>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
  }
};
