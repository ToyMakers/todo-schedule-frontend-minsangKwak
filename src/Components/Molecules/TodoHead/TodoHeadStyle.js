import styled from "styled-components";

export const TodoHeadStyle = styled.div`
    padding-top: ${({ theme }) => theme.paddings.xxxl};
    padding-left: ${({ theme }) => theme.paddings.xxl};
    padding-right: ${({ theme }) => theme.paddings.xxl};
    padding-bottom: ${({ theme }) => theme.paddings.xl};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white_darken};
`;
