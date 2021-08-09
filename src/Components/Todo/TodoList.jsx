import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListContainer = styled.div`
    flex: 1;
    padding: 2rem 3.2rem;
    padding-bottom: 4.8rem;
    overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListContainer>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="프로젝트 생성하기" done={false} />
            <TodoItem text="프로젝트 생성하기" done={false} />
        </TodoListContainer>
    );
};

export default TodoList;
