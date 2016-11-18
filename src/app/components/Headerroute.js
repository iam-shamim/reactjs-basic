import React from 'react';
import {Link} from 'react-router';
export class HeaderRoute extends React.Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/" activeStyle={{color:"Green"}}>App</Link></li>
                            <li><Link to="home" activeStyle={{color:"Red"}}>Home</Link></li>
                            <li><Link to={"/user/" + (2+2)} activeStyle={{color:"Red"}}>User</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}