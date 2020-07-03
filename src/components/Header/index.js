import React from 'react';

import "./styles.css"

const Header = () => (
    <header id="main-header">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
            <img className="nav-logo" src="" />
            <a href="/" className="navbar-brand">HeaPe</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Produtos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;