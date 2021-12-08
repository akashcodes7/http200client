import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Universel/Title';
import { MainLayout } from '../../assets/styles/Layouts';
import PrimaryButton from '../../components/Universel/PrimaryButton';
const Register = () => {
  return (
    <MainLayout>
      <RegisterPageStyled>
        <div className="title">
          <Title title="Register" />
        </div>

        <div className="main-content">
          <form className="form" autocomplete="off">
            <div className="form-field">
              <label htmlFor="name" id="name">
                Enter your name
              </label>
              <input type="text" id="name" />
            </div>
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
            <div className="form-field">
              <label htmlFor="subject" id="name">
                Confirm Password
              </label>
              <input type="text" id="name" />
            </div>
            <div className="form-field">
              <PrimaryButton title={'SignUp Now'} />
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
  text-align: center;
  left: 25%;

  border: 2px solid black;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 2px 20px 2px grey;
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
  }
`;

export default Register;
