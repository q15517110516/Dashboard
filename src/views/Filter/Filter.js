import React, { Component } from 'react';
import { Slider, Checkbox, Divider } from 'antd';
import './Filter.css';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Male', 'Female', 'Unknown'];
const defaultCheckedList = ['Male', 'Female', 'Unknown'];

export class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        };
    }

    onChangeCheckbox = checkedList =>{
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
        this.props.changeIncludedGender(checkedList);
    };

    onCheckAllChange = e => {
        const checkedList = e.target.checked ? plainOptions : [];
        this.setState({
            checkedList: checkedList,
            indeterminate: false,
            checkAll: e.target.checked,
        });
        this.props.changeIncludedGender(checkedList);
    };

    onChangeSlider = value => {
        this.props.changeGreaterThenAge(value);
    }
    render() {
        return (
            <div id="view3" className="pane">
                <div className="header">Filter</div>
                <h3>Gender</h3>
                <div style={{ width: 275, margin: 5 }}>
                    <Checkbox
                        indeteriminate = {this.state.indeterminate}
                        onChange = {this.onCheckAllChange}
                        checked = {this.state.checkAll}
                    >
                    Check All    
                    </Checkbox>
                </div>
                <br />
                <div style={{ width: 275, margin: 5 }}>
                    <CheckboxGroup
                        options = {plainOptions}
                        value = {this.state.checkedList}
                        onChange = {this.onChangeCheckbox} />

                </div>
                <Divider />
                <h3>Age</h3>
                <Slider defaultValue={0} onChange = {this.onChangeSlider} />
            </div>
        )
    }
}

export default Filter;
