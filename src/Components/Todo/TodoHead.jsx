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
    // toLocaleDateString: 날짜의 날짜부분을 언어로 구분하여 표현한 문자열을 반환
    const today = new Date();
    const date = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const dateName = today.toLocaleDateString("ko-KR", {
        weekday: "long",
    });
    return (
        <TodoHeadStyle>
            <h1 className="date">{date}</h1>
            <div className="day">{dateName}</div>
            <div className="tasks-left">할 일 n개 남음</div>
        </TodoHeadStyle>
    );
};

export default TodoHead;
