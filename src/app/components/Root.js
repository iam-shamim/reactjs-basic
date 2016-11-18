import React from 'react';
import {HeaderRoute} from './HeaderRoute';

export class Root extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-offset-xs-1">
                        <HeaderRoute />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-offset-xs-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}