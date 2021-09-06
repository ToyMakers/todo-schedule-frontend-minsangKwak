import React from "react";
import InsertForm from "../../Atoms/InsertForm/InsertForm";
import { InsertFormPositionerStyle } from "../../Molecules/InsertFormPositioner/InsertFormPositionerStyle";

const InsertFormPositioner = () => {
    return (
        <InsertFormPositionerStyle>
            <InsertForm />
        </InsertFormPositionerStyle>
    );
};

export default InsertFormPositioner;
