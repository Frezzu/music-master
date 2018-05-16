import React, {Component} from 'react';
import {Button, Form, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {MdSearch} from "react-icons/lib/md/index";

class SearchForm extends Component {
    render() {
        return (
            <Form {...this.props}>
                <InputGroup>
                    <Input placeholder={this.props.placeholder}/>
                    <InputGroupAddon addonType="append">
                        <Button type="submit" color="secondary">
                            <MdSearch/>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        )
    }
}

export default SearchForm;