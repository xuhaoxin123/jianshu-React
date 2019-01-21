
import { fromJS } from "immutable";
import *as constants from './constants';
const defaultState = fromJS({
    topicList:[],
    articleList: [],
    recommendList: [],
    articlePage:1,
    showScroll:false
});


const ChangeHomeData = (state , action) => {
    return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommendList':fromJS(action.recommendList)
    })
}

const addArticleList = (state , action) => {
    return   state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
       })
}

export default (state = defaultState, action) => {
  switch (action.type) {
      case constants.CHANGE_HOME_DATA:
        return  ChangeHomeData(state, action)

      case constants.ADD_ARTYCLE_LIST:
        return  addArticleList(state, action)
       
       case constants.TOGGLE_SCROLL_TOP:

       return state.set('showScroll', action.show)
      default:
      return state;
  }
};
