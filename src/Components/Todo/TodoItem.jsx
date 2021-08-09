import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
    /* display: flex; */
    align-items: center;
    justify-content: center;
    color: var(--default-button-color);
    font-size: 2.4rem;
    cursor: pointer;
    &:hover {
        color: var(--primary-color);
    }
    display: none;
`;

const TodoItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1.6rem;
    border: 1px solid var(--default-button-color);
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 2.1rem;
    color: var(--default-font-color);
    ${(props) =>
        props.done &&
        css`
            color: var(--default-button-color);
        `}
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemStyle>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemStyle>
    );
}

export default TodoItem;
