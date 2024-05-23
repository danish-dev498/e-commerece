import { devices } from "@/lib/CommonStyles";

const { styled } = require("styled-components");

export const Label = styled.label`
  width: ${({ expanding }) => (expanding ? "60rem" : "30rem")};

  display: block;
  margin-left: 10px;
  margin-bottom: 1px;
  margin-top: 8px;
  font-weight: bold;

  &:focus {
    outline: 0.5rem solid var(--color-yellow-500);
  }

  @media (max-width: 1000px) {
    width: ${({ expanding }) => (expanding ? "100%" : "25rem")};
    height: 3.5rem;
  }
`;
