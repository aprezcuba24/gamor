import { PADDING_SIDE, MEDIA_QUERY_MOBILE, PADDING_SIDE_MOBILE } from './constants';
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
