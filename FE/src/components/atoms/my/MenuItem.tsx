/* eslint-disable @typescript-eslint/no-empty-function */
import styled from '@emotion/styled';
import React from 'react';

interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  //   key?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  selected?: boolean;
}
function MenuItem({
  children,
  className,
  disabled,
  onClick,
  selected,
  ...rest
}: MenuItemProps) {
  return (
    <Atom className={className} onClick={onClick} {...rest}>
      {children}
    </Atom>
  );
}
const Atom = styled.li``;

MenuItem.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  selected: false,
};

export default MenuItem;