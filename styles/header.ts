import styled from 'styled-components';
import BaseLink from "next/link";
import { MEDIA_QUERY, MEDIA_QUERY_MOVILE } from './constants';

type OpenCloseProps = {
  open: boolean;
}

export const HeaderWrapper = styled.div<OpenCloseProps>`
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_MOVILE} {
    display: ${({ open }) => open ? 'block' : 'none'};
    padding: 20px;
    padding-top: 0;
  }
`;

export const Triangle = styled.div<OpenCloseProps>`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid ${({ theme }) => theme.menu.color};
  transform: rotate(${({ open }) => open ? 180 : 0}deg) translate(0px, ${({ open }) => open ? 3 : 0}px);
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
  padding: 20px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${MEDIA_QUERY} {
    display: none;
  }
`;