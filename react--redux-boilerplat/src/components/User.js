import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component{
    render(){
        return(
            <div>
                <h2>{`${this.props.user.username} Dashboard`}</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(User);