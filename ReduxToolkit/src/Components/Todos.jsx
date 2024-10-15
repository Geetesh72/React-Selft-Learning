import React from 'react'
import { userSelector, useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'
function Todos() {
    const todos = useSelector(state => state.Todos)

    const dispatch = useDispatch()


    return (
        <>
            <div>Todos</div>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>

                ))}

        </>




    )
}

export default Todos
