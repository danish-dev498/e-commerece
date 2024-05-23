import { devices } from "@/lib/CommonStyles";

const { styled } = require("styled-components");
export const Input = styled.input`
width: ${({ expanding }) => expanding ? '60rem' : '30rem'};
/* width: 60rem; */
height: ${(height) => height ? height : ''};
/* border-radius: ${(borderRadius) => borderRadius ? borderRadius : '9999px'}; */
border-radius: 9999px;
border: 1px solid var(--color-grey-300);
padding-left: ${({ pl }) => pl ? pl : ''};
padding: ${({ p }) => p ? p : ''};
outline: none;
margin-left: ${({ ml }) => (ml ? ml : '')};
display: block;
color: var(--color-grey-500);


&:focus {
    outline: 0.5rem solid var(--color-yellow-500);
}


@media (max-width: 1000px) {
    width: ${({ expanding }) => expanding ? '100%' : '25rem'};
    height: 3.5rem;
}




`

