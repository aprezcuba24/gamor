import { PADDING_SIDE, MEDIA_QUERY_MOBILE, PADDING_SIDE_MOBILE } from './constants';
import Link from 'next/link';
import styled from 'styled-components';

type CellProps = {
  center?: boolean;
}

export const Top = styled.div`
  display: flex;
  padding: 0 ${PADDING_SIDE};
  ${MEDIA_QUERY_MOBILE} {
    display: block;
    padding: ${PADDING_SIDE_MOBILE};
  }
  margin-bottom: 100px;
`;

export const TopCell = styled.div<CellProps>`
  width: 33.333333333%;
  height: 200px;
  padding: 50px;
  background-color: ${({ theme }) => theme.home.cellCenter};
  &:first-child {
    border-radius: 15px 0 0 15px;
    background-color: ${({ theme }) => theme.home.cellColor }
  }
  &:last-child {
    border-radius: 0 15px 15px 0;
    background-color: ${({ theme }) => theme.home.cellColor }
  }
  ${MEDIA_QUERY_MOBILE} {
    width: 100%;
    &:first-child {
      border-radius: 15px 15px 0 0 ;
    }
    &:last-child {
      border-radius: 0 0 15px 15px;
    }
  }
`;

export const Categories = styled.div`
  padding: 0 ${PADDING_SIDE};
  display: flex;
  flex-wrap: wrap;
  ${MEDIA_QUERY_MOBILE} {
    display: block;
    padding: 0 ${PADDING_SIDE_MOBILE};
  }
`;

export const CategoryCardWrapper = styled.div`
  width: 25%;
  padding: 5px;
  ${MEDIA_QUERY_MOBILE} {
    width: 100%;
    padding: 0 0 5px 0;
  }
`;

export const CategoryCard = styled(Link)`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.categoryCard.borderColor};
  background-color: ${({ theme }) => theme.categoryCard.backgroundColor};
  border-radius: 5px;
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.text}
`;

export const CategoryCardNumber = styled.div`
  font-size: 12px;
`;

export const CategoryCardName = styled.div`
  font-weight: bold;
`;
