import React, {Component} from 'react';
import './HistorySidebar.css'
import MdHistory from 'react-icons/lib/md/history';
import MdHighlightRemove from "react-icons/lib/md/highlight-remove";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import RelatedArtists from "../RelatedArtists/RelatedArtists";
import {MdDeleteForever} from "react-icons/lib/md/index";
import {clearSearchHistory} from "../../home-actions";
import connect from "react-redux/es/connect/connect";
import PrettyLoader from "../../../../components/PrettyLoader/PrettyLoader";

class HistorySidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    clearSearchHistory() {
        this.props.clearSearchHistory();
    }

    componentDidMount() {
        this.setState({hidden: false});
    }

    componentWillUnmount() {
        this.setState({hidden: true});
    }

    render() {
        return (
            <Sidebar
                openIcon={<MdHistory/>}
                closeIcon={<MdHighlightRemove/>}
            >
                <div className="search-history--header">
                    <h2 className="search-history--title">Search history</h2>
                    <MdDeleteForever
                        className="search-history--trash-icon"
                        onClick={() => this.forceUpdate(this.clearSearchHistory())}
                    />
                </div>

                {
                    this.props.homeReducer.searchHistory.length ?
                        <PrettyLoader loading={this.state.loading}>
                            <RelatedArtists items={this.props.homeReducer.searchHistory} showGenres={true}
                                            searchMethod={this.props.searchMethod}/>
                        </PrettyLoader>
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

export default connect(
    (state) => {
        return {
            homeReducer: state.homeReducer
        }
    },
    {
        clearSearchHistory
    }
)(HistorySidebar);