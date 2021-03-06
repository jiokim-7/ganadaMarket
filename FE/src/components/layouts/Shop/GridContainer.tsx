import React from 'react';
import styled from '@emotion/styled';

interface PropsStyle {
  children: React.ReactNode;
}

function GridContainer({ children, ...rest }: PropsStyle) {
  return <Grid style={{ ...rest }}>{children}</Grid>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default GridContainer;
