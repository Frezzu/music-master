import React, {Component} from 'react';
import {Col, Row} from "reactstrap";

class Gallery extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <Col key={index} xs={3} md={5}>
                                {item}
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

export default Gallery;