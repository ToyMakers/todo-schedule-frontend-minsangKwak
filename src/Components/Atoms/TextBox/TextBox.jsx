import React from "react";
import { TextBoxStyle } from "./TextBoxStyle";

const TextBox = ({ done, text }) => {
    return <TextBoxStyle done={done}>{text}</TextBoxStyle>;
};

export default TextBox;
