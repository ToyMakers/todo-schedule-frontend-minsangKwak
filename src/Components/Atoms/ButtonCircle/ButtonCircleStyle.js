import styled, { css } from "styled-components";

export const ButtonCircleStyle = styled.button`
    background: ${({ theme }) => theme.colors.blue};
    &:hover {
        background: ${({ theme }) => theme.colors.blue_lighten};
    }
    &:active {
        background: ${({ theme }) => theme.colors.blue};
    }

    z-index: 5;
    cursor: pointer;
    width: 8rem;
    height: 8rem;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;
    ${(props) =>
        props.open &&
        css`
            background: ${({ theme }) => theme.colors.red};
            &:hover {
                background: ${({ theme }) => theme.colors.red_lighten};
            }
            &:active {
                background: ${({ theme }) => theme.colors.red};
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;
