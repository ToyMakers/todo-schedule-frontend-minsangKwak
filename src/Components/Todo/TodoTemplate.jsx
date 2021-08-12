import React from "react";
import styled from "styled-components";

const TodoTemplateStyle = styled.div`
    width: 51.2rem;
    min-height: 76.8rem;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1.6rem;
    box-shadow: ${({ theme }) => theme.shadows.black};
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media all and (max-width: ${({ theme }) => theme.deviceSizes.mobileL}) {
        min-width: ${({ theme }) => theme.width.auto};
        width: ${({ theme }) => theme.width.lg};
    }
`;

function TodoTemplate({ children }) {
    return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
}

export default TodoTemplate;
