import React, {Component} from 'react';
import './style.css';
import {Container as BootstrapContainer} from 'reactstrap';

class ContainerWithSidebar extends Component {
    render() {
        return (
            <div className={`app-container ${this.props.className}`}>
                {this.props.sidebar}
                <BootstrapContainer>
                    {this.props.children}
                </BootstrapContainer>
            </div>
        )
    }
}

export default ContainerWithSidebar;