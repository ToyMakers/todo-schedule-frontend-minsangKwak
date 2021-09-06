import React from "react";
import { CheckBoxStyle } from "./CheckBoxStyle";
import { MdDone } from "react-icons/md";

const CheckBox = ({ done }) => {
    return <CheckBoxStyle done={done}>{done && <MdDone />}</CheckBoxStyle>;
};

export default CheckBox;
