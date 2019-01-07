import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';


export const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
}) 
export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const MouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const MouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () =>{
    return (dispatch) => {
        console.log('8888888888888888888888888888888')
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('err')
        })
    }
}
