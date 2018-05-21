import React, {Component} from 'react';
import './HistorySidebar.css'
import MdHistory from 'react-icons/lib/md/history';
import MdHighlightRemove from "react-icons/lib/md/highlight-remove";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import RelatedArtists from "../RelatedArtists/RelatedArtists";

class HistorySidebar extends Component {
    render() {
        return (
            <Sidebar
                openIcon={<MdHistory/>}
                closeIcon={<MdHighlightRemove/>}
            >
                <h2 className="search-history--title">Search history</h2>
                {
                    this.props.items.length ?
                        <RelatedArtists items={this.props.items} showGenres={true}
                                        searchMethod={this.props.searchMethod}/>
                        :
                        <div
                            className="search-history--empty-history"
                        >
                            Currently You haven't searched for anything.
                        </div>
                }
            </Sidebar>
        )
    }
}

export default HistorySidebar;