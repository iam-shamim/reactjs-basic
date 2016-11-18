import React from 'react';
import {browserHistory} from 'react-router';
export class Users extends React.Component {
    toNavigateHome(){
        browserHistory.push("/home")
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-offset-xs-1">
                        <h2>This user page</h2>
                        <p>User ID: {this.props.params.id}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-offset-xs-1">
                        {this.props.children}
                        <br/>
                        <button className="btn btn-primary" onClick={this.toNavigateHome}><span className="glyphicon glyphicon-home"></span> Go Home!</button>
                    </div>
                </div>
            </div>
        );
    }
}