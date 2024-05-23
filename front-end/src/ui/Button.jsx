import { devices } from "@/lib/CommonStyles";
import styled, { css } from "styled-components";



const sizes = {
  small: css`
   font-size: 1.2rem;
    /* padding: 0.4rem 0.8rem; */
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    @media (max-width: 768px) {
     height: 2.5rem;
     width: 2.5rem;
    }

    `,
  medium: css`
    font-size: 1.4rem;
    padding: 0.7rem 1.9rem;
    font-weight: 600;
    border-radius: 9999px;

    @media (max-width: 768px) {
      padding: 0.5rem 1.3rem;
    }
    
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 3rem;
    font-weight: 500;
    border-radius: 9999rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-800);
    background-color: var(--color-yellow-500);
    &:hover {
      background-color: var(--color-yellow-400);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    &:hover {
      background-color: var(--color-red-800);
     
    }
  `,
};

const Button = styled.button`
  border: none;
  margin-top: ${({ mt }) => (mt ? mt : '')};
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
