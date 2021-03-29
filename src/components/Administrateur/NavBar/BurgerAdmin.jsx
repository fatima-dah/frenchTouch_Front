import { useState } from "react";
import styled from "styled-components";
import PopNavAdmin from "./PopNavAdmin.jsx";

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
display: none;
margin-left:15%;


@media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
}   

div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'var(--secondary-color)' : 'var(--light)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`;

const BurgerAdmin = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      <StyledBurger open={open} onClick={() => setOpen(!open)}>

        <div />
        <div />
        <div />

      </StyledBurger>
      <PopNavAdmin open={open} />

    </>
  );
};

export default BurgerAdmin;
