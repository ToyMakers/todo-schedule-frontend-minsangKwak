import React from "react";
import styled from "styled-components";

const TodoHeadStyle = styled.div`
    padding-top: ${({ theme }) => theme.paddings.xxxl};
    padding-left: ${({ theme }) => theme.paddings.xxl};
    padding-right: ${({ theme }) => theme.paddings.xxl};
    padding-bottom: ${({ theme }) => theme.paddings.xl};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white_darken};
    .date {
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
        color: ${({ theme }) => theme.colors.gray_darken};
        margin: ${({ theme }) => theme.margins.default};
    }
    .day {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
        color: ${({ theme }) => theme.colors.gray};
        margin-top: ${({ theme }) => theme.margins.small};
    }
    .tasks-left {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        margin-top: ${({ theme }) => theme.margins.xxl};
        color: ${({ theme }) => theme.colors.blue};
    }
`;

const TodoHead = () => {
    return (
        <TodoHeadStyle>
            <h1 className="date">2021.00.00</h1>
            <div className="day">0요일</div>
            <div className="tasks-left">할 일 n개 남음</div>
        </TodoHeadStyle>
    );
};

export default TodoHead;
