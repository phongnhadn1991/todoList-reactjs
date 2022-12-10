import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slice/FilterSlice";
import todoListSlice from "./slice/TodoSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store