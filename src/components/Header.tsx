import styled from "styled-components";
import { useState } from "react";

import NavLinks from "./NavLinks";
import { media } from "@/utils/media";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunc = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <StyledHeader>
      <HeaderRight>
        <NavLinks openMenu={openMenu} />
        <MenuButton onClick={() => menuFunc()}>
          <MenuButtonBar $openMenu={openMenu} />
          <MenuButtonBar $openMenu={openMenu} />
          <MenuButtonBar $openMenu={openMenu} />
          <MenuButtonText>
            {
              openMenu ? "Close" : "Menu"
            }
          </MenuButtonText>
        </MenuButton>
      </HeaderRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100px;
`;

const HeaderRight = styled.div`

  ${media.sm`
    display: block;
    position: fixed;
    top: 30px;
    right: 30px;
  `}
`;

const MenuButton = styled.div`
  position: fixed;
  top: 20px;
  right: 14px;
  cursor: pointer;
  padding: 10px;
  text-align: center;

  ${media.xs`
    right: 30px;
  `}

  ${media.sm`
    display: none;
  `}
`;

const MenuButtonBar = styled.span<{ $openMenu: boolean }>`
  ${({ $openMenu }) => $openMenu ? `
    background-color: #1A1A1A;
  ` : `background-color: #FFFFFF;`}
  width: 30px;
  height: 1px;
  display: block;
  transform-origin: 50% 50%;
  transition: 0.3s ease-in-out;

  &:nth-child(1) {
    position: relative;
    top: -8px;
    ${({ $openMenu }) => $openMenu &&`
      transform: rotate(30deg);
      top: 1px;
    `}
  }

  &:nth-child(2) {
    ${({ $openMenu }) => $openMenu && `visibility: hidden;`}
  }

  &:nth-child(3) {
    position: relative;
    top: 8px;
    ${({ $openMenu }) => $openMenu && `
      transform: rotate(-30deg);
      top: -1px;
    `}
  }
`;

const MenuButtonText = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;