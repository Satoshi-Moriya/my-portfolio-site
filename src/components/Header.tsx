import styled from "styled-components";

import NavLinks from "./NavLinks";
import { media } from "@/utils/media";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderRight>
        <NavLinks />
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
  display: none;

  ${media.sm`
    display: block;
    position: fixed;
    top: 30px;
    right: 30px;
  `}
`;