import { legacy_createStore as createStore } from 'redux'

const initialState = {
    counter: 0,
    text: '',
    list: []
}

// Define action types
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// Define action creators
const increase = () => ({
    type: INCREASE,
    payload: 0
})

const decrease = () => ({
    type: DECREASE,
    payload: 0
})

const changeText = (text: string) => ({
    type: CHANGE_TEXT,
    payload: text
})

const addToList = (item: any) => ({
    type: ADD_TO_LIST,
    payload: item
})

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof changeText>
    | ReturnType<typeof addToList>

// Create reducer
function reducer(state=initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        default:
            return state;
    }
}

// Create redux store (주의: application 당 하나만 만들어야 한다.)
const store = createStore(reducer)

// Create listener (store 내부 상태가 바뀔 때 마다 호출 된다.)
const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독 해지하고 싶을 때 unsubscribe() 호출
const unsubscribe = store.subscribe(listener);

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('Hello world!'))
store.dispatch(addToList({
    id: 1,
    text: 'wow!'
}))

export {}
