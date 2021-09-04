import React from "react";
import { InsertFormStyle } from "./InsertFormStyle";

const InsertForm = () => {
    return (
        <InsertFormStyle>
            <input autoFocus placeholder="목록 작성 후 엔터를 눌러주세요." />
        </InsertFormStyle>
    );
};

export default InsertForm;
