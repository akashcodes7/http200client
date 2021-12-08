import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Universel/Title';
import SmallTitle from '../../components/Universel/SmallTitle';
import { MainLayout } from '../../assets/styles/Layouts';
import PrimaryButton from '../../components/Universel/PrimaryButton';
import { NavLink } from 'react-router-dom';
const login = () => {
  return (
    <MainLayout>
      <RegisterPageStyled>
        <div className="title">
          <Title title="Login/Register" />
        </div>

        <div className="main-content">
          <form className="form" autocomplete="off">
            <div className="form-field">
              <label htmlFor="email" id="email">
                Enter your email
              </label>
              <input type="email" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="subject" id="name">
                Enter Password
              </label>
              <input type="text" id="name" />
            </div>
            <div className="form-grid">
              <div className="left-content">
                <PrimaryButton title={'Login'} />
              </div>

              <div className="right-content">
                <SmallTitle title="New User ?" className="title-register" />
                <NavLink to="/register">
                  <PrimaryButton title={'Register'} />
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </RegisterPageStyled>
    </MainLayout>
  );
};
const RegisterPageStyled = styled.div`
  background-color: var(--primary-color);
  position: relative;
  padding: 15px 15px;
  width: 50%;
  height: 50%;
  border: 2px solid black;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 2px 20px 2px grey;
  left: 25%;
  .title {
    border-bottom: 1px solid var(--border-color);
  }
  .form {
    width: 100%;
    .form-field {
      margin-top: 2rem;
      position: relative;
      width: 100%;
      label {
        position: absolute;
        left: 20px;
        top: -19px;
        display: inline-block;
        background-color: #fbfbfb;
        padding: 0 0.5rem;
        color: inherit;
      }
      input {
        border: 1px solid #d9cab3;
        outline: none;
        background: transparent;
        height: 40px;
        padding: 0 15px;
        width: 100%;
      }
    }
    .form-grid {
      position: relative;
      padding-top: 15px;
      display: flex;
      margin-left: 10px;
      .right-content {
        float: right;
        position: absolute;
        margin-left: 50%;
        display: flex;
      }
      .left-content {
        margin-left: 10%;
      }
    }
  }
`;

export default login;
