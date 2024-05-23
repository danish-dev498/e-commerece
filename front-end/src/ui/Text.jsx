import { styled } from "styled-components";

import { devices } from "@/lib/CommonStyles";


export const Text = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};

	width: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
    font-family:  ${({ fontFamily }) => (fontFamily ? fontFamily : '')};
    /* white-space: nowrap; */
	
/* 	
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')}; */
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	/* color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')}; */
`;