import React from "react";
import styled from "styled-components";

const TodoTemplateStyle = styled.div`
    width: 51.2rem;
    min-height: 76.8rem;
    position: relative;
    background: var(--default-color);
    border-radius: 1.6rem;
    box-shadow: var(--custom-box-shadow);
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media all and (max-width: 530px) {
        min-width: auto;
        width: 100%;
    }
`;

function TodoTemplate({ children }) {
    return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
}

export default TodoTemplate;
