import React from 'react';
import styled from 'styled-components';
export default function PrimaryButton(props) {
  return (
    <PrimaryButtonStyled>
      {props.title}
      {}
    </PrimaryButtonStyled>
  );
}
const PrimaryButtonStyled = styled.a`
  background-color: var(--button-color-dark);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
`;
