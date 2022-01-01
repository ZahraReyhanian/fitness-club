import React from "react"
import styled from "styled-components"

import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip(props) {
  const { data, isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {data.map((item, index) => (
        <MenuButton item={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 40px;

  position: absolute;
  width: 260px;
  right: 30px;
  top: 60px;

  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
`
