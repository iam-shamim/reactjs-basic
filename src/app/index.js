import React from 'react';
import { render } from 'react-dom';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';

import { Root } from './components/Root';
import { Users } from './components/Users';
import { HomeRoute } from './components/HomeRoute';
import { HeaderRoute } from './components/HeaderRoute';




class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={HomeRoute} />
                    <Route path={"user/:id"} component={Users} />
                    <Route path={"home"} component={HomeRoute} />
                </Route>

            </Router>
        );
    }
}
render(<App/>,window.document.getElementById('app'));