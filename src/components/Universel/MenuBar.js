import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

export default function Sidebar() {
  return (
    <MenuBarStyled>
      <Navigation />
    </MenuBarStyled>
  );
}

const MenuBarStyled = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 10%;
  background-color: var(--sidebar-background-color);
`;
