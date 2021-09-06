import styled from "styled-components";

export const InsertFormStyle = styled.form`
    padding: 3.2rem 3.2rem 7.2rem;
    border-bottom-left-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    background: ${({ theme }) => theme.colors.white_lighten};
    border-top: 1px solid ${({ theme }) => theme.colors.gray_lighten};
`;
