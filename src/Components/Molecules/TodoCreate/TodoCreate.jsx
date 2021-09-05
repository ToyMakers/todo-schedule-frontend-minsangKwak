import React, { useState } from "react";
import InsertFormPositioner from "../InsertFormPositioner/InsertFormPositioner";
import ButtonCircle from "../../Atoms/ButtonCircle/ButtonCircle";

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    return (
        <>
            {open && <InsertFormPositioner />}
            <ButtonCircle onToggle={onToggle} open={open} />
        </>
    );
};

export default TodoCreate;
