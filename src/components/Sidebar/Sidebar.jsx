import React, {Component} from 'react';
import './Sidebar.css';
import {connect} from "react-redux";
import {toggleSidebar} from "./sidebar-actions";

class Sidebar extends Component {

    toggle() {
        this.props.toggleSidebar();
    }

    render() {
        return (
            <div className={`sidebar--wrapper ${this.props.sidebarReducer.toggle ? ' active' : ''}`}>
                <div
                    className={`sidebar${this.props.sidebarReducer.toggle ? ' active' : ''}`}
                    children={this.props.children}
                />
                <div
                    className="sidebar--toggle"
                    onClick={() => this.toggle()}
                >
                    {this.props.sidebarReducer.toggle ? this.props.closeIcon : this.props.openIcon}
                </div>
            </div>
        )
    }

}

export default connect(
    state => {
        return {
            sidebarReducer: state.sidebarReducer
        }
    },
    {
        toggleSidebar
    }
)(Sidebar);