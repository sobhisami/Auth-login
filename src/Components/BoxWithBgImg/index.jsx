import React, { Component } from "react";
import './style.css'

export default class BoxWithBgImg extends Component {
    render() {
        return (
            <div className="box__bg_img">
                {this.props.children}
            </div>
        );
    }
}