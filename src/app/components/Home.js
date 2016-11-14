import React from 'react';
export class Home extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <p>This is Component</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Home.Proptype = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    //children: React.Proptypes.element.isRequired
}