import React from "react";
import Profile from "../../pic/Profile.jpg";

const Header = () => {
    return (
        <header className="header bg-dark text-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img
                        src={Profile}
                        alt="Frederick Maxwellee"
                        className="img-fluid rounded-circle"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4">Hello, I am Frederick Maxwellee</h1>
                    </div>
                </div>
            </div>
    </header>
    );
};

export default Header;