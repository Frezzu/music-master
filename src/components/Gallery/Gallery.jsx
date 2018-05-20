import React, {Component} from 'react';
import './Gallery.css';
import {Col, Row} from "reactstrap";

class Gallery extends Component {
    render() {
        return (
            <Row
                className="gallery"
            >
                {
                    this.props.items.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                className="gallery--item"
                                xs={6}
                                md={4}
                            >
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