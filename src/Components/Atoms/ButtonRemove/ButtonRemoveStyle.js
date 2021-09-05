import styled from "styled-components";

export const ButtonRemoveStyle = styled.div`
    opacity: 0;
    color: ${({ theme }) => theme.colors.gray_lighten};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    cursor: pointer;
    &:hover {
        opacity: 1;
        color: ${({ theme }) => theme.colors.blue};
    }
`;
