import React, { useState } from "react";
import { TodoListStyle } from "./TodoListStyle";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const [names, setNames] = useState([
        { id: 1, text: "프로젝트 생성하기1", done: true },
        { id: 2, text: "프로젝트 생성하기2", done: true },
        { id: 3, text: "프로젝트 생성하기3", done: false },
        { id: 4, text: "프로젝트 생성하기4", done: false },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const namesList = names.map((name) => (
        <TodoItem key={name.id} text={name.text} done={name.done} />
    ));
    return <TodoListStyle>{namesList}</TodoListStyle>;
};

export default TodoList;
