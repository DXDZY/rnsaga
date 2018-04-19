import watchCarDetail from './watchCarDetail';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        watchCarDetail(),
    ]);
}