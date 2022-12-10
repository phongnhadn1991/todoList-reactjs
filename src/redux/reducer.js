import { combineReducers } from "redux"
import filterReducer from "./slice/FilterSlice"
import todoListReducer from "./slice/TodoSlice"

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer
})

export default rootReducer