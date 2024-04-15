import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects';
import counter, {counterSaga} from './counter'

const rootReducer
    = combineReducers({ counter });
export function* rootSaga() {
    // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
    yield all([counterSaga()])
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
