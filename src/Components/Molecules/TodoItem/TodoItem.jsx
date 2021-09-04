import React from "react";
import CheckBox from "../../Atoms/CheckBox/CheckBox";
import TextBox from "../../Atoms/TextBox/TextBox";
import ButtonRemove from "../../Atoms/ButtonRemove/ButtonRemove";
import { TodoItemStyle } from "./TodoItemStyle";

const TodoItem = ({ id, done, text }) => {
    return (
        <TodoItemStyle>
            <CheckBox done={done} />
            <TextBox done={done} text={text}>
                {text}
            </TextBox>
            <ButtonRemove />
        </TodoItemStyle>
    );
};

export default TodoItem;
