import React, {Component} from 'react';

class Profile extends Component {
    render() {
        const props = {};
        Object.assign(props, this.props);
        props.children = undefined;

        return (
            <div {...props}>
                <div>
                    <img src={this.props.image}/>
                </div>
                <div>
                    <div>
                        {this.props.name}
                    </div>
                    <div children={this.props.description}/>
                </div>
            </div>
        )
    }
}

export default Profile;