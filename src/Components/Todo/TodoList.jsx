import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListContainer = styled.div`
    flex: 1;
    padding: ${({ theme }) => {
        const { xl } = theme.paddings;
        return `${xl} ${xl} ${xl} ${xl}`;
    }};
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
