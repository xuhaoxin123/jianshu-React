import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper ,TopicItem} from '../style';
class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item)=>{
                    return(
                        <TopicItem key={item.get('id')}>
                                <img alt="" className="topic-pic" src={item.get('imgUrl')}></img>
                        {item.get('title')}
                        </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        );
    }
}
const mapStateToProps=(state)=>({
    list:state.get('home').get('topicList')
})
export default connect( mapStateToProps , null )(Topic);