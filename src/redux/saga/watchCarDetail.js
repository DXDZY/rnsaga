import {put,takeLatest,call,all} from 'redux-saga/effects';
import axios from 'axios';
import * as apis from './../../service/api';
import './../../mock/carDetail';

function* getDetail(action){
    try{
        const data = yield call(axios);
        yield put({
            type: 'carDetail/getDataSuccess',
            payload:{
                data:123,
            }
        });
    }catch(e){
        yield put({
            type: 'carDetail/getDataError',
            payload:{
                error: e,
            }
        });
    }
}
export default function* watchCarDetail(){
    yield all([
        takeLatest('carDetail/getData',getDetail),
    ])
}