import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={`/cuisine/Italian`}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={`/cuisine/American`}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={`/cuisine/Thai`}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={`/cuisine/Japanese`}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

// Styled Components

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

// StyleLink = SLink
// Below works perfectly fine
// Can replace those NavLinks in the the jsx above with 'SLink'
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  color: black;
  border: 3px solid orange;
  transition: ease-out 0.3s;
  z-index: 1;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: gray;
    font-size: 0.8rem;
  }
  /* 
  svg {
    color: gray;
    font-size: 1.5rem;
    margin-bottom: 10px;
  } */

  &:hover {
    color: orange;
    cursor: pointer;
  }

  &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: orange;
  }

  &:hover::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }

  /* &.active {
    background: linear-gradient(to right, #f27121, #8f40e9);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  } */
`;

export default Category;

// When we use the NavLink as a tag, it automatically inherit an active class when
// clicked.
// Use it mostly on navigation bars. This is because the active class permits us to define our custom styling in the App.css stylesheet

// On the other hand, the Link tag does now have an active class when clicked.

// Link tag can be used where we want to do just some routing with no special effect.
// For instance; we can use the Link tag for scroll-to-top button, add to card buttons
// submit button and more.
