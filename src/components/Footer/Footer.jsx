import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-content container">
                    <div>
                        Created by Bartłomiej Mroziński
                    </div>
                    <div>
                        <em>Powered by Spotify API</em>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;