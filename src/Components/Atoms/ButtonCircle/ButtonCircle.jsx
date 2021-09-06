import React from "react";
import { ButtonCircleStyle } from "./ButtonCircleStyle";
import { MdAdd } from "react-icons/md";

const ButtonCircle = ({ onToggle, open }) => {
    return (
        <ButtonCircleStyle onClick={onToggle} open={open}>
            <MdAdd />
        </ButtonCircleStyle>
    );
};

export default ButtonCircle;
