import styled from "styled-components";

const Transitions = () => {
  return (
    <Wrapper>
      <Btn href="#">Button</Btn>
      <FillBtn href="#">Button with background transition</FillBtn>
      <Link href="#">Link</Link>
      <UnderlineLink href="#">Link with underline transition</UnderlineLink>
      <UnstyledButton>Unstyled button</UnstyledButton>
      <SlideDownBtn>Button that slides down</SlideDownBtn>
    </Wrapper>
  );
};

const Btn = styled.a`
  ${({ theme }) => theme.mixins.button}
`;

const FillBtn = styled.a`
  ${({ theme }) => theme.mixins.button}
  ${({ theme }) => theme.mixins.backgroundFillTransition}
`;

const Link = styled.a`
  ${({ theme }) => theme.mixins.link}
`;

const UnderlineLink = styled.a`
  ${({ theme }) => theme.mixins.link}
  ${({ theme }) => theme.mixins.underlineSlideInTransition}
`;

const UnstyledButton = styled.button`
  ${({ theme }) => theme.mixins.unstyledButton}
`;

const SlideDownBtn = styled.a`
  --slide-duration: 500ms;
  --slide-delay: 300ms;
  ${({ theme }) => theme.mixins.button}
  ${({ theme }) => theme.mixins.slideDownAnimation}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > * {
    max-width: fit-content;
  }
`;

export default Transitions;
