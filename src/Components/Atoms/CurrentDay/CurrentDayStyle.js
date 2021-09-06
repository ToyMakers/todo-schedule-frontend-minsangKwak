import styled from "styled-components";

export const CurrentDayStyle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray};
    margin-top: ${({ theme }) => theme.margins.small};
`;
