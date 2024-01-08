import { ReactNode } from "react";
import styled from "styled-components";

export default function FixedBg({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <StyledFixedBg>
      {children}
    </StyledFixedBg>
  );
}

const StyledFixedBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
`;