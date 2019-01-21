import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actionCreators } from './store/index';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.match.params.id);
        return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
			
                ></Content>
			</DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) =>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispathToProps = (dispatch) =>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState , mapDispathToProps)(Detail);