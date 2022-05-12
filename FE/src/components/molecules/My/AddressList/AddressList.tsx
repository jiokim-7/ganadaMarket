import styled from '@emotion/styled';
import React from 'react';
import { Item } from 'components/atoms/My';
import Address from 'type/Address';
import AddressInfo from './AddressInfo';
import ButtonsBox from './ButtonsBox';

interface AddressListProps {
  items: Array<Address>;
}

function AddressList({ items, ...rest }: AddressListProps) {
  const myList = items.map((item) => (
    <StyledItem item={item} key={item.addressId}>
      <AddressInfo item={item} />
      <ButtonsBox item={item} />
    </StyledItem>
  ));
  return <div {...rest}>{myList}</div>;
}
AddressList.defaultProps = {};
const StyledItem = styled(Item)`
  padding: ${(props) => (props.item.activate ? `30px 0 29px` : `17px 0 16px`)};
  border-bottom: ${(props) =>
    props.item.activate ? `2px solid #222` : `1px solid #ebebeb`};
`;
export default AddressList;
