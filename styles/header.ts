import styled from 'styled-components';
import BaseLink from "next/link";
import { MEDIA_QUERY, MEDIA_QUERY_MOVILE } from './constants';

export const HeaderWrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_MOVILE} {
    display: block;
    padding: 20px;
  }
`;

export const Link = styled(BaseLink)`
  color: ${({ theme }) => theme.menu.color};
  font-weight: bold;
  text-decoration: none;
`;

export const RegisterLink = styled(Link)`
  border-radius: 20px;
  background-color: #01070b;
  border: 1px solid white;
  padding: 10px 20px;
  color: white;
`;

export const LinkHome = styled(Link)`
  color: ${({ theme }) => theme.menu.home};
`

export const Menu = styled.ul`
  List-style: none;
  padding: 0;
  display: flex;
  ${MEDIA_QUERY_MOVILE} {
    display: block;
  }
`;

export const MenuRight = styled(Menu)`
  ${MEDIA_QUERY_MOVILE} {
    padding-top: 20px;
  }
`;

export const Li = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const LiRegister = styled(Li)`
  ${MEDIA_QUERY_MOVILE} {
    padding-top: 20px;
  }
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 30px;
  padding: 0;
  line-height: 1;
`;

export const LogoCenter = styled(Logo)`
  ${MEDIA_QUERY_MOVILE} {
    display: none;
  }
`;

export const LogoTop = styled(Logo)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  ${MEDIA_QUERY} {
    display: none;
  }
`;