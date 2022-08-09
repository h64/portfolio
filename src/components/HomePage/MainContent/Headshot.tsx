import Image from "next/image";
import styled from "styled-components";

const Headshot = () => {
  return (
    <ImgWrapper>
      <Image
        src={"/profile.jpg"}
        alt="Headshot"
        layout="responsive"
        width={256}
        height={256}
      />
    </ImgWrapper>
  );
};

const ImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  min-width: 192px;
  max-width: 256px;
  aspect-ratio: 1 / 1;
  height: 100%;
  line-height: 0;
  border-radius: 8px;
  background-color: var(--brand);
  flex: 1;
  align-self: center;

  & img {
    mix-blend-mode: hard-light;
    z-index: 1;
    border-radius: 8px;
  }

  &:hover img {
    mix-blend-mode: unset;
  }

  ::after {
    pointer-events: none;
    position: absolute;
    content: "";
    border: 2px solid var(--brand);
    top: 16px;
    left: 16px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: top 400ms, left 400ms;
  }

  &:hover::after {
    transition: top 200ms, left 200ms;
    top: 12px;
    left: 12px;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    align-self: flex-start;
  }
`;

export default Headshot;
