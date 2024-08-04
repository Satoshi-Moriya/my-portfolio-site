import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Work } from "@/pages/works";


export default function WorkList({
   works,
}: {
  works: Work[];
}) {

  return (
    <>
      <StyledWorkList>
        {works.map(({ id, title, mv} ) => (
          <StyledWorkItem key={id}>
            <Link href={`/works/${id}`}>
              <StyledWorkImage
                layoutId={`mv_${id}`}
              >
                <img src={mv?.url} alt={title}/>
              </StyledWorkImage>
            </Link>
          </StyledWorkItem>
        ))}
      </StyledWorkList>
    </>
  )
}

const StyledWorkList = styled.ul`
  gap: 40px 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
`;

const StyledWorkItem = styled.li`
  aspect-ratio: 16 / 9;
  // overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledWorkImage = styled(motion.figure)`
  // background-color: #000000;
  // height: 100vh;
  // width: 100%;
  // position: fixed;
  // z-index: -1;
`;