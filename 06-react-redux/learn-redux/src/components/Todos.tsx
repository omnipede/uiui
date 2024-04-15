import React, {useState} from "react";

type TodosProps = {
    todos: any,
    onCreate: any,
    onToggle: any,
}

function Todos(props: TodosProps) {
    const { todos, onCreate, onToggle } = props;

    const [text, setText] = useState('')
    const onChange = (e: any) => setText(e.target.value)
    const onSubmit = (e: any) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholder={"Please input ..."} onChange={onChange} />
                <button type={'submit'}>submit</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

function TodoList({ todos, onToggle }: { todos: any[], onToggle: any}) {
    return (
        <ul>
            { todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    )
}

function TodoItem({ todo, onToggle }: { todo: any, onToggle: any}) {
    return (
        <li
            style={{ textDecoration: todo.done? 'line-through' : 'none'}}
            onClick={() => onToggle(todo.id)}
        >
            { todo.text }
        </li>
    )
}

export default Todos;
