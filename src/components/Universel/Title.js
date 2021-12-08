import React from 'react';
import styled from 'styled-components';
export default function Title(props) {
  return (
    <TitleStyled>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  padding-top: 0.5rem;
  h2 {
    color: var(--font-color-dark);
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
