import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/Universel/NavBar';

import HomePage from './pages/HomePage';
import LRPage from './pages/LoginRegister';
import { MainLayout } from './assets/styles/Layouts';
import Register from './components/LoginRegister/Register';
import Report from './components/Report/Report';

import { ThemeProvider } from '@mui/material';
import theme from './components/Universel/Theme';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <MainContentStyled>
          <MainLayout>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/report" exact>
                <Report />
              </Route>
              <Route path="/feedback" exact>
                <HomePage />
              </Route>
              <Route path="/contact" exact>
                <HomePage />
              </Route>
              <Route path="/login" exact>
                <LRPage />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Redirect to="/" />
            </Switch>
          </MainLayout>
        </MainContentStyled>
      </ThemeProvider>
    </React.Fragment>
  );
}
const MainContentStyled = styled.main``;

export default App;
