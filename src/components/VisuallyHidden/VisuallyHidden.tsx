import { ReactNode } from "react";
import styled from "styled-components";

const VisuallyHidden = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

// https://www.a11yproject.com/posts/how-to-hide-content/
const Wrapper = styled.div`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default VisuallyHidden;
