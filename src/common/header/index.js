import React, { Component } from 'react';
import {HeaderWrapper ,Logo ,Nav ,NavItem , NavSearch, Addition , Button ,SearchWrapper} from './style';
class Header  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            focused: false
         };
    }
    render() {
        return (
           <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch
                        className={this.state.focused ? 'focused':''}
                        ></NavSearch>
                        <i className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe623;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                    <i className="iconfont">&#xe61c;</i>
                    写文章</Button>
                </Addition>
           </HeaderWrapper> 
        );
    }
}

export default Header;