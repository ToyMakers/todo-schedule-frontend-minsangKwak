import styled from "styled-components";

export const CurrentDateStyle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    color: ${({ theme }) => theme.colors.gray_darken};
    margin: ${({ theme }) => theme.margins.default};
`;
