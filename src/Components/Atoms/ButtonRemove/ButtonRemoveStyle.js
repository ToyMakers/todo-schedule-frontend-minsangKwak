import styled from "styled-components";

export const ButtonRemoveStyle = styled.div`
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
