import styled, { css } from "styled-components";

export const CheckBoxStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2.4rem;
    border-radius: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_lighten};
    margin-right: ${({ theme }) => theme.margins.xl};
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.blue};
        `}
`;

// CheckBoxStyle.defaultProps = {
//     done: false,
// };
