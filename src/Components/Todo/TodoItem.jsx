import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
    /* display: flex; */
    display: none;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray_lighten};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.blue};
    }
`;

const TodoItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding:${({ theme }) => {
        const { lg } = theme.paddings;
        return `${lg} 0 ${lg}`;
    }}}
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2.4rem;
    border-radius: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_lighten};
    margin-right: ${({ theme }) => theme.margins.xl};
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.blue};
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors.gray_darken};
    ${(props) =>
        props.done &&
        css`
            color: ${({ theme }) => theme.colors.gray_lighten};
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
