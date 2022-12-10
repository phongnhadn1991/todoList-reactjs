import { createSelector } from "@reduxjs/toolkit"

export const todoListSelector = (state) => state.todoList
export const filterSelector = (state) => state.filters

export const todoFilterSearch = createSelector(
    todoListSelector,
    filterSelector,
    (todoList,filters) => {
        return todoList.filter((todo) => {
            if(filters.status === 'All') {
                return filters.priority.length ? todo.name.toLowerCase().includes(filters.search.toLowerCase()) &&
                filters.priority.includes(todo.priority) : todo.name.toLowerCase().includes(filters.search.toLowerCase())
            }

            return todo.name.toLowerCase().includes(filters.search.toLowerCase()) &&
            (filters.status === 'Completed' ? (todo.completed && filters.priority.length ? filters.priority.includes(todo.priority) : todo.completed) : (!todo.completed && filters.priority.length ? filters.priority.includes(todo.priority) : !todo.completed) ) 
        })
    }
)