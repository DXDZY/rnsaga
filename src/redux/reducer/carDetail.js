import * as actions from './../../action/carDetail';
import {handleActions} from 'redux-actions';

const carDetailReducer = handleActions({
    [actions.getDataSuccess]:(state,action)=>({
        ...state,
        isLoading:false,
        ...action.payload,
    }),
    [actions.getDataError]:(state,action)=>({
        ...state,
        isLoading:false,
        ...action.payload,
    })
},{
    data:{},
    error:null,
    isLoading:true,
    currentSoundType:'-1',
});
export default carDetailReducer;