import React from "react";
import styled from "styled-components";

const TodoHeadStyle = styled.div`
    padding: 4.8rem 3.2rem 2.4rem;
    border-bottom: 1px solid #e9ecef;
    .date {
        margin: 0;
        font-size: 3.4rem;
        color: var(--custom-font-color-gray-dark);
    }
    .day {
        margin-top: 0.4rem;
        color: var(--custom-font-color-gray-light);
        font-size: 2.1rem;
    }
    .tasks-left {
        color: var(--primary-color);
        font-size: 1.8rem;
        margin-top: 3rem;
        font-weight: bold;
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
