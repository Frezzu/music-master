import React, {Component} from 'react';
import './PrettyLoader.css';

class PrettyLoader extends Component {
    render() {
        return (
            <div className="pretty-loader">
                {
                    this.props.loading ?
                        <div className="pretty-loader--loader">
                            <div className="loader-spinner"/>
                        </div>
                        :
                        null
                }
                {this.props.children}
            </div>
        )
    }
}

export default PrettyLoader;