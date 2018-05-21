import React, {Component} from 'react';
import './ContainerWithSidebar.css';
import {Container as BootstrapContainer} from 'reactstrap';
import Footer from "../../Footer/Footer";

class ContainerWithSidebar extends Component {
    render() {
        return (
            <div className={`app-container ${this.props.className}`}>
                {this.props.sidebar}
                <BootstrapContainer>
                    {this.props.children}
                </BootstrapContainer>

                <Footer/>
            </div>
        )
    }
}

export default ContainerWithSidebar;