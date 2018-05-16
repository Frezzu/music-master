import React, {Component} from 'react';
import './style.css';
import {Container as BootstrapContainer} from 'reactstrap';

class ContainerWithSidebar extends Component {
    render() {
        const props = {};
        Object.assign(props, this.props);
        props.sidebar = undefined;

        return (
            <div className="app-container">
                {this.props.sidebar}
                <BootstrapContainer {...props}/>
            </div>
        )
    }
}

export default ContainerWithSidebar;