import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const ButtonCircle = styled.button`
    background: var(--primary-color);
    &:hover {
        background: var(--primary-color-light);
    }
    &:active {
        background: var(--primary-color);
    }

    z-index: 5;
    cursor: pointer;
    width: 8rem;
    height: 8rem;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    color: var(--default-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${(props) =>
        props.open &&
        css`
            background: var(--warning-color);
            &:hover {
                background: var(--warning-color-light);
            }
            &:active {
                background: var(--warning-color);
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: var(--default-color-light);
    padding: 3.2rem 3.2rem 7.2rem;
    border-bottom-left-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    border-top: 1px solid var(--default-color-dark);
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open === true ? (
                <InsertFormPositioner>
                    <InsertForm>
                        <input
                            autoFocus
                            placeholder="목록 작성 후 엔터를 눌러주세요."
                        />
                    </InsertForm>
                </InsertFormPositioner>
            ) : null}
            <ButtonCircle onClick={onToggle} open={open}>
                <MdAdd />
            </ButtonCircle>
        </>
    );
}

export default TodoCreate;
