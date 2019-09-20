import React from "react";
import styled from "styled-components";

const Headline = styled.h2`
  font-size: ${props => props.textsize || "24px"};
`;

export function Header({ size }) {
  return (
    <header>
      <Headline textsize={size}>Welcome</Headline>
    </header>
  );
}
