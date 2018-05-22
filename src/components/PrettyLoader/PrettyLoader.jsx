import React, {Component} from 'react';
import './PrettyLoader.css';

class PrettyLoader extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default PrettyLoader;