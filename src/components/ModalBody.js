import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ModalBody extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-sm-6">
                <Form>
                <FormGroup>
                    <Label for="show">Who to show</Label>
                    <Input type="select" name="select" id="show">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="screen-size">Minimum screen size</Label>
                    <Input type="select" name="select" id="screen-size">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>            
                <FormGroup>
                    <Label for="display">Max display frequency</Label>
                    <Input type="select" name="select" id="display">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Active date/time
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Expire date/time
                </Label>
                </FormGroup>
            </Form>
                
            </div>
            <div className="col-sm-6">
            <FormGroup>
                    <Label for="screen-size">Location (Geo)</Label>
                    <Input type="select" name="select" id="screen-size">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>            
                <FormGroup>
                    <Label for="display">Where to display</Label>
                    <Input type="select" name="select" id="display">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
            </div>
            
    </div>
        
    )
  }
};
