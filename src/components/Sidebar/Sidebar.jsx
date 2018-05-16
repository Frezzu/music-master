import React, {Component} from 'react';
import './styles.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    render() {


        return (
            <div className="sidebar-wrapper">
                <div
                    className={"sidebar" + (this.state.active ? ' active' : '')}
                    children={this.props.children}
                />
                <div
                    className="sidebar-switch"
                    onClick={() => this.setState({active: !this.state.active})}
                >
                    {this.state.active ? this.props.closeIcon : this.props.openIcon}
                </div>
            </div>
        )
    }
}

export default Sidebar;