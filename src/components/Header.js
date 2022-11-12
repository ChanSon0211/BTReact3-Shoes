import React from "react";
import "./Header.css"

// Component là thành phần giao diện
// Component bao gồm : HTML , CSS , JS

class Header extends React.Component {
    render(){
        //  return giao diện của header
        return(
            <div className="header">
                <a className="logo" href="#">Logo</a>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Login</a>
            </nav>
            </div>
            
        )

    }
}

export default Header;