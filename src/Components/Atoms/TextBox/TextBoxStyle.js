import styled, { css } from "styled-components";

export const TextBoxStyle = styled.div`
    flex: 1;
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors.gray_darken};
    ${(props) =>
        props.done &&
        css`
            color: ${({ theme }) => theme.colors.gray_lighten};
        `}
`;

// TextBoxStyle.defaultProps = {};
