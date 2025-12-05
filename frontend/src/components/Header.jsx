import React from "react";

const Header = () => {
    return (
        <header className="header_area sticky-header" style={{ marginTop: "30px" }}>
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        <a className="navbar-brand logo_h" href="/">
                            <img src="/assets/img/logo.png" alt="logo" />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>

                                <li className="nav-item submenu dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                        Shop
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="#">Shop Category</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Product Details</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Checkout</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Confirmation</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><a href="#" className="cart"><span className="ti-bag"></span></a></li>
                                <li className="nav-item">
                                    <button className="search">
                                        <span className="lnr lnr-magnifier" id="search"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <div className="search_input" id="search_input_box">
                <div className="container">
                    <form className="d-flex justify-content-between">
                        <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" className="btn"></button>
                        <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>
                </div>
            </div> */}
        </header>
    );
};

export default Header;
