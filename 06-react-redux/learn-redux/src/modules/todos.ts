// Define action types
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// Define action creator
let nextId = 1;
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
})
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    id
})

type State = {
    id: number,
    text: string,
    done: boolean
}

// Initial state
const initialState: State[] = [

]

// Reducer
export default function todos(state=initialState, action: any) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        default:
            return state
    }
}