import React, { Component } from 'react';
import { Slider, Checkbox } from 'antd';
import 'antd/dist/antd.css';
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
            <div className="filter-box">
                
                <div className="title">Filter</div>
                
                <div className="gender-checkbox">
                    <h4>Gender</h4>
                    <div className="checkbox" >
                        <Checkbox
                            indeteriminate = {this.state.indeterminate}
                            onChange = {this.onCheckAllChange}
                            checked = {this.state.checkAll}
                            
                        >
                        Check All    
                        </Checkbox>
                    </div>
                    <br />
                    <div className="checkboxGroup">
                        <CheckboxGroup
                            options = {plainOptions}
                            value = {this.state.checkedList}
                            onChange = {this.onChangeCheckbox}
                            />
                            
                    </div>
                </div>
                
                <div className="age-slider">
                    <h4>Age</h4>
                    <Slider defaultValue={0} onChange = {this.onChangeSlider} />
                </div>
            </div>
        )
    }
}

export default Filter;
