import React from "react";
import TodoTemplate from "../../Templates/TodoTemplate/TodoTemplate";

const Todo = ({ children }) => {
    return <TodoTemplate>{children}</TodoTemplate>;
};

export default Todo;
