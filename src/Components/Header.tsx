import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className={"header"}>
            <h1>Peyton Schaefer</h1>
            <ul className={"link-list"}>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header;
