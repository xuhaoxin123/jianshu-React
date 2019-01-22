import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import {ListItem , ListInfo ,LoadMore} from '../style';
import { BrowserRouter as Router, Link } from "react-router-dom";
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {list ,getMoreList ,page} = this.props;
        return (
            <div>
                {
                    list.map((item, index)=>{
                     return (
                         <Link key={index} to={'/detail/'+ item.get('id')}>
                            <ListItem key={index}>
                                <img alt="" className="pic" src={item.get('imgUrl')}></img>
                                <ListInfo>
                                        <h3 className="title">{item.get('titie')}</h3>
                                        <p className="desc">
                                                {item.get('desc')}
                                        </p>
                                </ListInfo>
                            </ListItem>
                         </Link>
                         )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDisPathProps = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapStateToProps , mapDisPathProps)(List);