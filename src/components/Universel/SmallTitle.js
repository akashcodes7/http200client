import React from 'react';
import styled from 'styled-components';
function SmallTitle(props) {
  return (
    <SmallTitleStyled>
      <p>{props.title}</p>
    </SmallTitleStyled>
  );
}
const SmallTitleStyled = styled.div`
  p {
    color: var(--font-color-light);
    padding-right: 10px;
  }
`;

export default SmallTitle;
