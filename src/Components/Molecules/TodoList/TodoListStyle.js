import styled from "styled-components";

export const TodoListStyle = styled.div`
    flex: 1;
    padding: ${({ theme }) => {
        const { xl } = theme.paddings;
        return `${xl} ${xl} ${xl} ${xl}`;
    }};
    overflow-y: auto;
`;
