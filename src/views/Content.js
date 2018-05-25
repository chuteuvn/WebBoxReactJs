import React, { Component } from 'react';
import ContentBoxLeft from '../components/ContentBoxLeft';
import ContentBoxRight from '../components/ContentBoxRight';

export default class Content extends Component {
  render() {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-sm-6">
                    <ContentBoxLeft />
                </div>
                <div className="col-sm-6">
                    <ContentBoxRight />
                </div>
            </div>
        </div>
    )
  }
};
