import styled from "styled-components";

const Skeleton = styled("div")<{ height: number }>(
  ({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
  })
);

export default Skeleton