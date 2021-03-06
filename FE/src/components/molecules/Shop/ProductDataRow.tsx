import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import LinkTag from '../../atoms/Shop/LinkTag';
import TextTag from '../../atoms/Shop/TextTag';
import { StateType } from '../../organisms/Shop/ProductData';
import FlexContainer from '../../layouts/Shop/FlexContainer';
import BlockContainer from '../../layouts/Shop/BlockContainer';

interface ProductDataRowT {
  rowData: string[];
  title: string;
  setFilter: Dispatch<SetStateAction<StateType>>;
}

function ProductDataRow({
  rowData,
  setFilter,
  title,
}: ProductDataRowT): JSX.Element {
  const [state, setState] = useState<boolean[]>([]);
  // 클릭하면 색깔 변화 주고
  // 클릭이 일어나면 리스트 변화
  const toggleLink = (num: number) => {
    const list = state.map((el: boolean, idx: number) =>
      idx === num ? !el : el,
    );
    setState(list);
  };

  // 처음 렌더링일 때 state Falsy update
  useEffect(() => {
    const list: boolean[] = [];
    rowData.forEach(() => {
      list.push(false);
    });
    setState(list);
  }, []);

  // state 가 변경될 때 필터링 정보 업데이트
  useEffect(() => {
    const list: string[] = [];
    state.forEach((el, idx) => {
      if (el) {
        list.push(rowData[idx]);
      }
    });
    setFilter((prev: StateType) => {
      return {
        ...prev,
        [title]: list,
      };
    });
  }, [state]);

  return (
    <FlexContainer {...flexContainer}>
      <BlockContainer {...titleBlockContainer}>
        <TextTag {...filterTilte}>{title}</TextTag>
      </BlockContainer>
      <BlockContainer {...filterBlockContainer}>
        {rowData.map((el, idx) => (
          <LinkTag
            {...filterStyle}
            key={el}
            onClick={() => toggleLink(idx)}
            isClick={state[idx]}
            hoverColor
          >
            {el}
          </LinkTag>
        ))}
      </BlockContainer>
    </FlexContainer>
  );
}

const flexContainer = {
  border: '1px solid #ecedf1',
};

const filterStyle = {
  fontSize: '1.3rem',
  padding: '0.3rem',
  marginLeft: '1rem',
};

const filterTilte = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
};

const titleBlockContainer = {
  height: 'auto',
  borderRight: '1px solid #ecedf1',
  backgroundColor: '#f9f9f9',
  width: '20rem',
  padding: '1rem',
};

const filterBlockContainer = {
  height: '100%',
  width: '100%',
  padding: '1rem',
  lineHeight: '300%',
};

export default ProductDataRow;
