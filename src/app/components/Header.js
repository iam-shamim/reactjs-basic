import React from "react";
export class Header extends  React.Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul>
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}