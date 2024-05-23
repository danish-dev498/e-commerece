import { styled } from "styled-components"

export const Tag = styled.div`    
width: fit-content;
padding: 1px 15px;
background-color:  ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '')};
color: white;
text-align: center;
border-radius: 999px;
margin-top: 10px;
`

