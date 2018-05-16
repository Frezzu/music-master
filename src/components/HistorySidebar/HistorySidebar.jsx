import React, {Component} from 'react';
import './styles.css';
import MdHistory from 'react-icons/lib/md/history';
import MdHighlightRemove from "react-icons/lib/md/highlight-remove";

class HistorySidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    render() {
        return (
            <div className="history-sidebar-wrapper">
                <div className={"history-sidebar" + (this.state.active ? ' active' : '')}>
                    History Sidebar
                </div>
                <div
                    className="history-sidebar-switch"
                    onClick={() => this.setState({active: !this.state.active})}
                >
                    {this.state.active ? <MdHighlightRemove/> : <MdHistory/>}
                </div>
            </div>
        )
    }
}

export default HistorySidebar;