import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";

import { poppinsFont } from "@/styles/fonts";
import { media } from "@/utils/media";
import { useSmMediaQuery, useXsMediaQuery } from "@/hooks/useMediaQuery";


const links = [
  { name: "Top", href: "/", },
  { name: "About", href: "/about", },
  { name: "Works", href: "/works", },
];

export default function NavLinks({
  openMenu,
  onClick
}: {
  openMenu: boolean
  onClick: () => void
}) {
  const pathname = usePathname();
  const xs = useXsMediaQuery();
  const sm = useSmMediaQuery();

  // ToDo 2200pxだと縦幅が大きい時やばそう
  let openClipPath = "circle(2200px at calc(100% - 40px) 31px)";
  let closedClipPath = "circle(0px at calc(100% - 40px) 31px)";

  if (xs) {
    openClipPath = "circle(2200px at calc(100% - 59px) 31px)";
    closedClipPath = "circle(0px at calc(100% - 59px) 31px)";
  }
  if (sm) {
    openClipPath = "none";
    closedClipPath = "none";
  }

  const menu = {
    open: {
      clipPath: openClipPath,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      },
    },
    closed: {
      clipPath: closedClipPath,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      },
    }
  };

  return(
    <StyledNavLinks
      animate={openMenu ? "open" : "closed"}
      variants={menu}
    >
      {
        links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              passHref
              legacyBehavior
              scroll={false}
            >
              <NavLink
                $isActive={pathname === link.href}
                onClick={onClick}
              >
                {link.name}
              </NavLink>
            </Link>
          );
        })
      }
    </StyledNavLinks>
  );
}

const StyledNavLinks = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  height: 100%;

  ${media.sm`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: transparent;
    height: auto;
  `}
`;

const NavLink = styled.a<{ $isActive: boolean }>`
  color: #1A1A1A;
  position: relative;
  padding: 20px;

  &:hover {
    color: #1A1A1A;
  }

  ${media.sm`
    padding: 10px 20px;
    color: #FFFFFF;
    text-shadow: 0 1px 3px #1A1A1A;
    font-family: ${poppinsFont.style.fontFamily}, sans-serif;

    &:hover {
      color: #FFFFFF;
    }
  `}

  &:before {
    background-color: #FFFFFF;
    height: 2px;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: -5%;
    bottom: 0;
    transition: transform 0.45s cubic-bezier(1, 0, 0, 1);
    transform: scale(0, 1);
    transform-origin: center;
    width: 110%;
  }

  ${({ $isActive }) => $isActive && `
    &:before {
      transform: scale(1, 1);
    }
  `}

  &:hover,
  &:focus {
    &:before {
      transform: scale(1, 1);
    }
  }
`;