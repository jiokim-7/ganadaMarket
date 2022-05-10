import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SubTitle from '../../atoms/Payment/SubTitle';
import Logo from '../../atoms/Payment/Logo';

interface Props {
  checked: boolean;
  item: ItemProps;
  onClick: React.MouseEventHandler<HTMLElement>;
}
interface ItemProps {
  bank: string;
  src: string;
}

function PayMethod({ item, checked, onClick }: Props) {
  return (
    <Container checked={checked} onClick={onClick}>
      <SubTitle>{item.bank}</SubTitle>
      {item.src ? <Logo src={item.src} alt={item.bank} /> : ''}
    </Container>
  );
}
export default PayMethod;

const dynamicStyle = ({ checked }: Partial<Props>) => {
  if (checked) {
    return css`
      border: 1px solid #000;
      font-weight: bold;
    `;
  }
  return css`
    border: 1px solid #ebebeb;
  `;
};

const Container = styled.div<Partial<Props>>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ebebeb;
  min-height: 6rem;
  width: calc(50% - 3px);
  margin: 6px 0 0;
  cursor: pointer;
  ${dynamicStyle}
`;
