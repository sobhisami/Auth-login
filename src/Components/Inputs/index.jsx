import React, { Component } from "react";
import { Label } from "../Typography";
import './style.css';

export default class Input extends Component {
    render() {
        const { label, value, id, type, placeholder, onChange, returnValue, className, t } = this.props;
        return (
            <div className="input_box">
                <Label text={label} />
                <input
                    type={type}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={className}

                />

            </div>
        );
    }
}