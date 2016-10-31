import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendName } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class Welcome extends Component{
    constructor(){
        super();
        this.state = {
            value:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){

        this.setState({value:e.target.value});
    }
    onSubmit(){
        this.props.senduser(this.state.value);
        browserHistory.push("user");
    }
    render(){
        return(
            <div>
                <div>
                    <h2 style={{color:'lightblue'}}>Welcome Page</h2>
                </div>
                <div>
                    <input type="text" placeholder="Enter your name" value={this.state.value} onChange={this.onChange}/>
                    <input type="submit" value="Proceed" onClick={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        senduser: bindActionCreators(sendName, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Welcome);