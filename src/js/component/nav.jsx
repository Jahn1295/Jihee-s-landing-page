import React from "react";

export function Nav(props) {
    const {
        homePage,
        myAccount,
        settings,
    } = props;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                    style={{
                        display:"flex",
                        justifyContent:"end"
                    }}
                    id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">{homePage}</a>
                        <a className="nav-link" href="#">{myAccount}</a>
                        <a className="nav-link" href="#">{settings}</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}