import React from "react";
import { TodoTemplateStyle } from "./TodoTemplateStyle";
import TodoHead from "../../Molecules/TodoHead/TodoHead";
import TodoList from "../../Molecules/TodoList/TodoList";
import TodoCreate from "../../Molecules/TodoCreate/TodoCreate";

const TodoTemplate = () => {
    return (
        <TodoTemplateStyle>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplateStyle>
    );
};

export default TodoTemplate;
