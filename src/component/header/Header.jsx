import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src='https://vtcoder-html3.surge.sh/img/logo.png' alt />
                </div>
                <div>
                    <ul>
                        <li>
                            <a>home</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;