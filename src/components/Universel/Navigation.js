import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LoginIcon from '@mui/icons-material/Login';
export default function Navigation() {
  return (
    <React.Fragment>
      <NavigationStyled>
        <div className="navbar-container">
          <div className="navbar-brand">
            <NavLink to="/" activeClassName="active-class" exact>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <ul className="navbar-nav-left">
            <li>
              <NavLink
                to="/"
                ClassName="a"
                activeClassName="active-class"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/report"
                ClassName="a"
                activeClassName="active-class"
                exact
              >
                Make a Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                ClassName="a"
                activeClassName="active-class"
                exact
              >
                Receive Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                ClassName="a"
                activeClassName="active-class"
                exact
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <ul class="navbar-nav-right">
            <li>
              <a href="https://facebook.com/" className="icon i-Facebook">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="icon i-Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/" className="icon i-YouTube">
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <NavLink
                to="/login"
                className="icon i-YouTube"
                activeClassName="active-class"
                exact
              >
                <LoginIcon />
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <button type="button" class="hamburger" id="menu-btn">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>

        {/* <!-- Mobile Menu --> */}
        <div class="mobile-menu hidden" id="menu">
          <ul>
            <li>
              <a href="https://google.com">Menu</a>
            </li>
            <li>
              <a href="https://google.com">Rewards</a>
            </li>
            <li>
              <a href="https://google.com">Gift Cards</a>
            </li>
          </ul>

          <div class="mobile-menu-bottom">
            <button class="btn btn-dark-outline">Sign in</button>
            <button class="btn btn-dark">Join now</button>
            <div>
              <a href="https://google.com">
                <img src="img/marker.svg" alt="" />
                <span>Find a store</span>
              </a>
            </div>
          </div>
        </div>
      </NavigationStyled>
    </React.Fragment>
  );
}

const NavigationStyled = styled.nav`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
  }
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin: 0 15px;
    font-weight: bold;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: grey;
  }
  .navbar-brand img {
    width: 100%;
    height: 50px;
  }
  .navbar-nav-left {
    flex: 1;
    margin-left: 20px;
  }
  .navbar-nav-left li a {
    text-transform: uppercase;
  }
  .navbar-nav-right {
    display: flex;
    justify-content: center;
    .icon {
      border: 2px solid #7f7c82;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      padding: 5px;
      &:hover {
        border: 2px solid var(--primary-color);
        background-color: var(--#151515);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .navbar-nav-right li {
    padding: 10px;
  }
  .navbar-nav-right li:nth-child(2) {
    margin: 0 5px;
  }
  /* Hamburger Menu Icon */
  .hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
    background: none;
    border: none;
    z-index: 10;
    transition: all 0.25s;
    display: none;
  }

  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
  }

  .hamburger-middle {
    transform: translateY(7px);
  }

  .hamburger-bottom {
    transform: translateY(14px);
  }

  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  .open .hamburger-middle {
    display: none;
  }

  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translateX(-6px);
  }
  /*Mobile menu*/
  .mobile-menu {
    position: fixed;
    top: 85px;
    right: 0;
    background-color: #fff;
    color: #000;
    width: 90%;
    height: 100%;
    padding: 30px;
    box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
      inset 0 4px 2px -2px rgb(0 0 0 / 7%);
    transition: all 0.3s;
  }

  .mobile-menu img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .mobile-menu ul {
    line-height: 3;
    border-bottom: #777 solid 1px;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

  .mobile-menu a {
    text-decoration: none;
    font-size: 20px;
  }

  .mobile-menu a:hover {
    color: var(--color-primary);
  }

  .mobile-menu div {
    margin-top: 20px;
  }

  .mobile-menu div a {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .hidden {
    transform: translateX(100%);
  }

  .no-scroll {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }
    .navbar-brand img {
      width: 40px;
      height: 40px;
    }
    .navbar-nav-left,
    .navbar-nav-right {
      display: none;
    }
  }
`;
