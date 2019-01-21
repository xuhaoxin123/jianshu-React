import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper ,HomeLeft ,HomeRight , BackTop} from './style';
import { actionCreators } from './store/index';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                   <HomeWrapper>
                        <HomeLeft>
                                <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>

                        <Topic/>
                        <List/>
                        </HomeLeft>
                        <HomeRight>
                            <Recommend/>
                            <Writer/>
                        </HomeRight>
                   </HomeWrapper>
                   {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null}
            </div>
        );
    }
    componentDidMount() {
       this.props.changeHomeData();
       this.bindEvents();
    }

    //组件销毁
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}


    bindEvents() {
        window.addEventListener('scroll' , this.props.changeScrollTopShow)
    }
}

const mapState =((state)=>({
        showScroll :state.getIn(['home','showScroll'])
}))


const mapDispathToProps= (dispatch)=>({
    changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
    },
    changeScrollTopShow(){
        
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>400){
               dispatch(actionCreators.toggleTopShow(true)) 
        }else{
               dispatch(actionCreators.toggleTopShow(false)) 
        }
    }
})
export default connect(mapState,mapDispathToProps)(Home);