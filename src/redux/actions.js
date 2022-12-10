
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const completedTodo = (id) => {
    return {
        type: 'todoList/completedTodo',
        payload: id
    }
}

export const searcFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (value) => {
    return {
        type: 'filters/statusFilterChange',
        payload: value
    }
}

export const priorityFilterChange = (value) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: value
    }
}

