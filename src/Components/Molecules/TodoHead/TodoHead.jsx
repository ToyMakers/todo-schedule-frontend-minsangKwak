import React from "react";
import CurrentDate from "../../Atoms/CurrentDate/CurrentDate";
import CurrentDay from "../../Atoms/CurrentDay/CurrentDay";
import TasksLeft from "../../Atoms/TasksLeft/TasksLeft";
import { TodoHeadStyle } from "./TodoHeadStyle";

const TodoHead = () => {
    const today = new Date();
    const date = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const dateName = today.toLocaleDateString("ko-KR", {
        weekday: "long",
    });
    return (
        <TodoHeadStyle>
            <CurrentDate date={date} />
            <CurrentDay dateName={dateName} />
            <TasksLeft />
        </TodoHeadStyle>
    );
};

export default TodoHead;
