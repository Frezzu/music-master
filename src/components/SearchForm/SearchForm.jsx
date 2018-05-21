import React, {Component} from 'react';
import {Button, Form, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {MdSearch} from "react-icons/lib/md/index";

class SearchForm extends Component {
    render() {
        return (
            <Form {...this.props}>
                <InputGroup>
                    <Input name="searchInput" placeholder={this.props.placeholder} disabled={this.props.disabled}/>
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