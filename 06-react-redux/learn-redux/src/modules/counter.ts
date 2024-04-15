
// Define action types
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Define action creator
export const setDiff = (diff: number) => ({ type: SET_DIFF, payload: diff})
export const increase = () => ({type: INCREASE, payload: 0})
export const decrease = () => ({type: DECREASE, payload: 0})

type CounterAction =
    ReturnType<typeof setDiff> |
    ReturnType<typeof increase> |
    ReturnType<typeof decrease>;

// Initial staet
const initialState = {
    number: 0,
    diff: 1,
}

// Reducer
export default function counter(state=initialState, action: CounterAction) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.payload
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            }
        default:
            return state
    }
}
