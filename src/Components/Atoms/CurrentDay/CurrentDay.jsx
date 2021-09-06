import React from "react";
import { CurrentDayStyle } from "./CurrentDayStyle";

const CurrentDay = ({ dateName }) => {
    return <CurrentDayStyle>{dateName}</CurrentDayStyle>;
};

export default CurrentDay;
