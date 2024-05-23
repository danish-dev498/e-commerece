import { styled } from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Text = styled.span`
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  text-align: ${({ align }) => (align ? align : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  color: ${({ color }) => (color ? color : '')};
  color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : '140px 0')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ white }) => (white ? '#fff' : '#f2f5f7')};
  color: ${({ color }) => (color ? color : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gtc }) => (gtc ? gtc : '')};
  grid-template-rows: ${({ gtr }) => (gtr ? gtr : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  padding-top: ${({ pt }) => (pt ? pt : '')};
  padding-bottom: ${({ pb }) => (pb ? pb : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const GridItem = styled.div`
  display: ${({ display }) => (display ? display : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  order: ${({ order }) => (order ? order : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  padding-top: ${({ pt }) => (pt ? pt : '')};
  padding-bottom: ${({ pb }) => (pb ? pb : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
