import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Main Page</Link>
                    </li>
                    <li>
                        <Link to="/about">About author</Link>
                    </li>
                    <li>
                        <Link to="/auth">Authorization</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;