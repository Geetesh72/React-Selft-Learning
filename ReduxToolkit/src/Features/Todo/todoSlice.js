import { createSlice,nanoid } from "@reduxjs/toolkit";

// store  have intially have intial state i take object 
const initialState={
    todos:[{
        id:1,
        text:"Hello world",

    },{},{},{}]

}

export const todoSlice = createSlice({
    name :"todo", 
    initialState,
    reducers:{   // syntax you have to learn (state,action )
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)

        },


        
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer
