import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ContentBoxRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgItems: [
            {
                id: '1',
                url:'http://www.likenmfg.com/image/cache/data/demo/product-4_1-200x275.jpg'
            },
            {
                id: '2',
                url:'http://www.likenmfg.com/image/cache/data/demo/product-4_1-200x275.jpg'
            },
            {
                id: '3',
                url:'http://www.likenmfg.com/image/cache/data/demo/product-4_1-200x275.jpg'
            },
            {
                id: '4',
                url:'http://www.likenmfg.com/image/cache/data/demo/product-4_1-200x275.jpg'
            },            
          ]
        };
      }

    renderImage() {
        return this.state.imgItems.map(item => {
            return <label className="btn-image gallery-item" id={'gallery-'+item.id} >
                <img src={item.url} width="40px" height="40px"/>
            </label>
        })
      }

    render() {
        return (
            <div className="box-content">
                <div className="scroll-wrapper">
                    <Scrollbars style={{ height: 800 }}>
                        <div className="three-step-setting">
                            <div className="step-number">
                                <div className="numberItem">3</div>
                            </div>
                            <span>Add Image</span>                                            
                        </div> 
                        <div className="add-image row">
                            <div className="col-sm-8">
                                <div className="clearfix group-image row">
                                    {

                                        this.renderImage()
                                    }
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="big-add-image">
                                    <label className="btn-image gallery-item" id={'gallery-add'} >
                                        <img src={'http://www.likenmfg.com/image/cache/data/demo/product-4_1-200x275.jpg'} width="140px" height="140px"/>
                                    </label>               
                                </div>
                            </div>
                        </div>  
                        <div className="four-step-setting">
                            <div className="step-number">
                                <div className="numberItem">4</div>
                            </div>
                            <span>Display Option</span>                                            
                        </div>  
                    </Scrollbars>
                </div>
            </div>  
        )
    }
};
