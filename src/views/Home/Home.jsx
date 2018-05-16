import React, {Component} from 'react';
import ContainerWithSidebar from "../../components/containers/ContainerWithSidebar/ContainerWithSidebar";
import HistorySidebar from "../../components/HistorySidebar/HistorySidebar";

class Home extends Component {
    render() {
        return (
            <ContainerWithSidebar sidebar={<HistorySidebar/>}>
                Home
            </ContainerWithSidebar>
        )
    }
}

export default Home;