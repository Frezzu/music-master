import React, {Component} from 'react';
import MdHistory from 'react-icons/lib/md/history';
import MdHighlightRemove from "react-icons/lib/md/highlight-remove";
import Sidebar from "../../../../components/Sidebar/Sidebar";

class HistorySidebar extends Component {
    render() {
        return (
            <Sidebar
                openIcon={<MdHistory/>}
                closeIcon={<MdHighlightRemove/>}
            >
                HistorySidebar
            </Sidebar>
        )
    }
}

export default HistorySidebar;