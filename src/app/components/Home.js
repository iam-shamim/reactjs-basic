import React from 'react';
export class Home extends React.Component{
    constructor(props) {
        super();
        this.state={
            age:props.initialAge,
            status:0,
            homeLink: "State Home"
        }
        //this.age=props.age;
        setTimeout(() => {
            this.setState({
                status:++this.state.status
            });
        },3000)
    }
    componentWillMount(){
        console.log('Component will mount');
    }
    componentDidMount(){
        console.log('Component did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log('Component will receive props ',nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update",nextProps,nextState);
        if(nextState.status==1){
            //return false;
        }
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("Component will update",nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Component did update",prevProps,prevState);
    }
    componentWillUnmount(){
        console.log('Component will UnMount');
    }
    makeMeOlder(){
        this.setState({age:this.state.age+3});
    }
    onChangeLink(){
        this.props.homeChange(this.state.homeLink);
    }
    onInputChange(e){
        this.setState({homeLink:e.target.value});
        //alert(e.target.value);
    }

    render(){

        return(
            <div>
                <p>This is Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                </ul>
                <button className="btn btn-primary" onClick={()=>this.makeMeOlder()}>Make Me Older!</button>
                <button className="btn btn-primary"  onClick={this.props.greet}>Greet</button>
                <button className="btn btn-primary"  onClick={this.props.homeChange.bind(this,'My Home ')}>New Home</button>
                <button className="btn btn-primary"  onClick={this.onChangeLink.bind(this)}>State Home</button>
                <br/><br/>
                <input type="text" className="form-control" defaultValue={this.props.initialHome} onChange={this.onInputChange.bind(this)} />
                <button className="btn btn-primary pull-right"  onClick={this.onChangeLink.bind(this)}>Change By User</button>
            </div>
        );
    }
}
Home.Proptype = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    greet: React.PropTypes.func,
    //children: React.PropTypes.element.isRequired
}
