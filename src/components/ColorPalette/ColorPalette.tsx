import styled from "styled-components";

const ColorPalette = () => {
  return (
    <div>
      <Row>
        <ColorBox color="color-gray-300">gray-300</ColorBox>
        <ColorBox color="color-gray-500">gray-500</ColorBox>
        <ColorBox color="color-gray-700">gray-700</ColorBox>
      </Row>
      <Row>
        <ColorBox color="color-primary">primary</ColorBox>
        <ColorBox color="color-secondary">secondary</ColorBox>
        <ColorBox color="color-tertiary">tertiary</ColorBox>
      </Row>
      <Row>
        <ColorBox color="color-white">white</ColorBox>
        <ColorBox color="color-black">black</ColorBox>
      </Row>
    </div>
  );
};

const Row = styled.div`
  display: flex;
`;

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  color: white;
  text-shadow: 1px 1px 0px #fff;
  background-color: ${(p) => (p.color ? `var(--${p.color})` : undefined)};
`;

export default ColorPalette;
