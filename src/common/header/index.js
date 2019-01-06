import React from 'react';
import {HeaderWrapper ,Logo ,Nav ,NavItem , SearchInfoTitle ,SearchInfoSwitch ,SearchInfoList,  SearchInfoItem ,  NavSearch, Addition , SearchInfo , Button ,SearchWrapper} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators } from './store';

const getListArea = (show) => {
    if(show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }
}

const Header = (props) => {
    
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
                    <CSSTransition
                        in={props.focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <NavSearch
                        className={props.focused ? 'focused':''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe623;</i>
                    {getListArea(props.focused)}
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


    

const mapStateToProps = (state)=> {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispathToProps = (dispatch)=> {
    return {
        handleInputFocus(){
         dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
         dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);