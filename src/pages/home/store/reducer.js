
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList:[{
        id:1,
        titie:'社会热点',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id:2,
        titie:'手绘',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id:3,
        titie:'社会热点',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
    articleList: [{
        id:1,
        titie:'如何用手账做周计划和日计划？方法大揭秘',
        desc:'自从知道成长和手账以来，已经过了3年多，我也算是个手账3年生了。这一年多来，周计划和日计划的方法基本没有变化，今天就来跟小伙伴...',
        imgUrl:'https://oimagea5.ydstatic.com/image?id=-7344007761557059132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    },{
        id:2,
        titie:'如何用手账做周计划和日计划？方法大揭秘',
        desc:'自从知道成长和手账以来，已经过了3年多，我也算是个手账3年生了。这一年多来，周计划和日计划的方法基本没有变化，今天就来跟小伙伴...',
        imgUrl:'https://oimagea5.ydstatic.com/image?id=-7344007761557059132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    },{
        id:3,
        titie:'如何用手账做周计划和日计划？方法大揭秘',
        desc:'自从知道成长和手账以来，已经过了3年多，我也算是个手账3年生了。这一年多来，周计划和日计划的方法基本没有变化，今天就来跟小伙伴...',
        imgUrl:'https://oimagea5.ydstatic.com/image?id=-7344007761557059132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    },{
        id:4,
        titie:'如何用手账做周计划和日计划？方法大揭秘',
        desc:'自从知道成长和手账以来，已经过了3年多，我也算是个手账3年生了。这一年多来，周计划和日计划的方法基本没有变化，今天就来跟小伙伴...',
        imgUrl:'https://oimagea5.ydstatic.com/image?id=-7344007761557059132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    },{
        id:5,
        titie:'如何用手账做周计划和日计划？方法大揭秘',
        desc:'自从知道成长和手账以来，已经过了3年多，我也算是个手账3年生了。这一年多来，周计划和日计划的方法基本没有变化，今天就来跟小伙伴...',
        imgUrl:'https://oimagea5.ydstatic.com/image?id=-7344007761557059132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
    }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
      default:
      return state;
  }
};
