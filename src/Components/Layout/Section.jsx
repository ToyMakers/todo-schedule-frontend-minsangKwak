import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section`
    padding: ${({ theme }) => theme.paddings.xl};
`;

const Section = ({ children }) => {
    return <SectionStyle>{children}</SectionStyle>;
};

export default Section;
