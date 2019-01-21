import React, { Component } from 'react';
import { connect } from 'react-redux';
import {RecommendWrapper ,RecommendItem} from '../style';
class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        
        );
    }
}
const mapStateToProps=(state)=>({
    list:state.get('home').get('recommendList')
})
export default  connect(mapStateToProps)(Recommend);