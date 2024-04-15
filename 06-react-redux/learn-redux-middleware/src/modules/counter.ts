import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';


const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const INCREASE_ASYNC = 'INCREASE_ASYNC'
const DECREASE_ASYNC = 'DECREASE_ASYNC'

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE})

export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

// Redux thunk 실습을 위한 비동기 thunk functions
export const increaseThunk = () => (dispatch: any) => {
    setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseThunk = () => (dispatch: any) => {
    setTimeout(() => dispatch(decrease()), 1000)
}

// Redux saga 실습을 위한 saga functions
function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga)
    yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initialState = 0;

type CounterAction =
    ReturnType<typeof increase> |
    ReturnType<typeof decrease>

export default function counter(state=initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
