import { createContext } from "react";

export const TodoContext = createContext(
    {
        todos: [{
            id: 1,
            todo: "First Todo",
            completed: false,
        }],
        addTodo: (todo) => { },
        toggleComplete: (id) => { },
        updateTodo: (id, todo) => { },
        deleteTodo: (id) => { }
    }
);

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;