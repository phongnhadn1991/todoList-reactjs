import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        {id: 1, name: 'Learn Redux', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Vue', completed: true, priority: 'High'},
        {id: 3, name: 'Learn Next', completed: false, priority: 'Medium'},
        {id: 4, name: 'Learn React', completed: false, priority: 'Medium'},
        {id: 5, name: 'Learn Vuex', completed: true, priority: 'High'},
        {id: 6, name: 'Learn Html', completed: true, priority: 'Low'},
    ],
    reducers: {
        addTodo: (state,action) => {
            return [...state,action.payload]
        },
        completedTodo: (state,action) => {
            const itemCompleted = state.find(item => item.id === action.payload)
            itemCompleted.completed = !itemCompleted.completed
        }
    }
})

export default todoListSlice