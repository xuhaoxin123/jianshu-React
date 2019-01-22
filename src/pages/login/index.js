import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { actionCreators } from './store/index';
import { LoginWrapper, LoginBox, Input, Button } from './style';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const {loginState} = this.props;
        if(!loginState){

            return (
                <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='账号' ref={(input)=>{this.account = input}}/>
                            <Input placeholder='密码' type='password' ref={(input)=>{ this.password = input}}/>
                            <Button onClick={()=>this.props.login(this.account, this.password)}>登陆</Button>
                        </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to="/"/>
        }
    }



}

const mapState =((state)=>({
      loginState: state.getIn(['login','login'])
}))


const mapDispathToProps= (dispatch)=>({
  login(accountElem , passwordElem){

    dispatch(actionCreators.login(accountElem.value , passwordElem.value))
        console.log(accountElem.value , passwordElem.value)
  }
})
export default connect(mapState,mapDispathToProps)(Login);