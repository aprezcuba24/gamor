import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const darkTheme = {
  body: '#0b1319',
  text: '#ffffff',
  menu: {
    color: '#7d8589',
    home: '#f4894e',
  },
  home: {
    cellColor: '#131b21',
    cellCenter: '#ff8442',
  },
  categoryCard: {
    borderColor: '#0b1319',
    backgroundColor: '#131b21',
  },
  login: {
    backgroundColor: '#ff8442',
    buttonColor: '#7814f3',
  }
};

export const lightTheme = {
  body: '#ffffff',
  text: '#2c3033',
  menu: {
    color: '#5c6061',
    home: '#662ab9',
  },
  home: {
    cellColor: '#ffffff',
    cellCenter: '#7814f3',
  },
  categoryCard: {
    borderColor: '#0b1319',
    backgroundColor: '#ffffff',
  },
  login: {
    backgroundColor: '#7814f3',
    buttonColor: '#ff8442',
  }
};