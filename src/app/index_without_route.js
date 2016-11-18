import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends React.Component{
    constructor() {
        super();
        this.state={
            homeLink:"Home",
            homeMounted:true
        }
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        });
    }
    onGreet(){
        alert('Hello');
    }
    onChangeMounted(){
        this.setState({homeMounted : !this.state.homeMounted})
    }
    render(){
        var user={
            name:"Shamim",
            hobbies:["Sports","Reading"]
        }
        let homeComp="";
        if(this.state.homeMounted){
            homeComp=(<Home
                name={"shamim"}
                initialAge={19}
                user={user}
                greet={this.onGreet}
                initialHome={this.state.homeLink}
                homeChange={this.onChangeLinkName.bind(this)}
            />);
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeMounted.bind(this)} >(Un) Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>,window.document.getElementById('app'));