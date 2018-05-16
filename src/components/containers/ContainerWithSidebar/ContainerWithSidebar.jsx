import React, {Component} from 'react';
import './style.css';
import {Container as BootstrapContainer} from 'reactstrap';

class ContainerWithSidebar extends Component {
    render() {
        return (
            <div className="app-container">
                {this.props.sidebar}
                <BootstrapContainer children={this.props.children}/>
            </div>
        )
    }
}

export default ContainerWithSidebar;