import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ListItem , ListInfo} from '../style';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item)=>{
                     return (
                            <ListItem key={item.get('id')}>
                                <img alt="" className="pic" src={item.get('imgUrl')}></img>
                                <ListInfo>
                                        <h3 className="title">{item.get('titie')}</h3>
                                        <p className="desc">
                                                {item.get('desc')}
                                        </p>
                                </ListInfo>
                            </ListItem>
                         )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    list: state.getIn(['home', 'articleList'])
})
export default connect(mapStateToProps)(List);