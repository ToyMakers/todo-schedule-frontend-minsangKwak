import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section`
    padding: 1rem;
`;

const Section = ({ children }) => {
    return <SectionStyle>{children}</SectionStyle>;
};

export default Section;
