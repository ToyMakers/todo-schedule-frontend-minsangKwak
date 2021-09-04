import styled, { css } from "styled-components";
import ButtonRemove from "../../Atoms/ButtonRemove/ButtonRemove";
import { ButtonRemoveStyle } from "../../Atoms/ButtonRemove/ButtonRemoveStyle";

export const TodoItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding:${({ theme }) => {
        const { lg } = theme.paddings;
        return `${lg} 0 ${lg}`;
    }}}
    &:hover {
        ${ButtonRemoveStyle} {
            display: initial;
        }
    }
`;
