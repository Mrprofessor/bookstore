import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {

    render() {
        return (
            <ul className="menuBar">
                <li><a>Books</a></li>
                <li><a>Add</a></li>
                <li><a>LOL</a></li>
            </ul>
        );
    }
}

export default Menu;

