import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import { poppinsFont } from "@/styles/fonts";
import { media } from "@/utils/media";

const links = [
  { name: "Top", href: "/", },
  { name: "About", href: "/about", },
  { name: "Works", href: "/works", },
];

export default function NavLinks({
  openMenu
}: {
  openMenu: boolean
}) {
  const pathname = usePathname();

  return(
    <StyledNavLinks $openMenu={openMenu}>
      {
        links.map((link) => {
          return (
            <NavLink
              key={link.name}
              href={link.href}
              isActive={pathname === link.href}
            >
              {link.name}
            </NavLink>
          );
        })
      }
    </StyledNavLinks>
  );
}

const StyledNavLinks = styled.nav<{ $openMenu: boolean }>`
  ${({ $openMenu }) => $openMenu ? `
    display: flex;
  ` : `display: none;`}
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  height: 100svh;

  ${media.sm`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: transparent;
    height: auto;
  `}
`

const NavLink = styled(
  (
    { href, isActive, children, ...props }:
    { href: string, isActive: boolean, children: string, }
  ) => (
    <Link href={href} {...props} scroll={false} >
      {children}
    </Link>
  )
)`
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

  ${({ isActive }) => isActive && `
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