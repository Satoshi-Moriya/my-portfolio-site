import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import { poppinsFont } from "@/styles/fonts";

const links = [
  { name: "Top", href: "/", },
  { name: "About", href: "/about", },
  { name: "Works", href: "/works", },
  { name: "Contact", href: "/contact", },
];

export default function NavLinks() {
  const pathname = usePathname();

  return(
    <StyledNavLinks>
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

const StyledNavLinks = styled.nav`
  display: flex;
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
  color: #FFFFFF;
  text-shadow: 0 1px 3px #1A1A1A;
  position: relative;
  padding: 10px 20px;
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;

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