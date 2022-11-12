import React from "react";
import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./Home.css"
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div>
                    <Header/>
                </div>
                <div className="container">
                    <div className="nav-left">
                       <Content/> 
                    </div>
                    <div className="nav-right">
                        <Sidebar/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home;