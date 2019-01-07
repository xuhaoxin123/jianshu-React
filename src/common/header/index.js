import React ,{Component} from 'react';
import {HeaderWrapper ,Logo ,Nav ,NavItem , SearchInfoTitle ,SearchInfoSwitch ,SearchInfoList,  SearchInfoItem ,  NavSearch, Addition , SearchInfo , Button ,SearchWrapper} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators } from './store';


class Header extends Component {

    getListArea(){
        const { focused , list ,page ,totalPage , mmouseIn , handleMouseEnter ,handleMouseLeave ,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i= (page -1 ) * 10; i < page  * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mmouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                            <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { focused ,handleInputBlur ,handleInputFocus } = this.props;
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
                        in={focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <NavSearch
                        className={focused ? 'focused':''}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont':'iconfont'}>&#xe623;</i>
                    {this.getListArea()}
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

const mapStateToProps = (state)=> {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mmouseIn: state.getIn(['header', 'mmouseIn'])
    }
}

const mapDispathToProps = (dispatch)=> {
    return {
        handleInputFocus(){
         dispatch(actionCreators.getList());
         dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
         dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
         dispatch(actionCreators.MouseEnter());
        },
        handleMouseLeave(){
         dispatch(actionCreators.MouseLeave());
        },
        handleChangePage(page,totalPage){
            console.log(page,totalPage)
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);