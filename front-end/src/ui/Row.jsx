import { devices } from "@/lib/CommonStyles";
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: ${({ gap }) => gap ? gap : ''};
      width: ${({ width }) => (width ? width : '')};
`}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: ${({ justify }) => (justify ? justify : '')};
      align-items: ${({ align }) => (align ? align : '')};
      gap: ${({ gap }) => gap ? gap : ''};
    `}




`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
