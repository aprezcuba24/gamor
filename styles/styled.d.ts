import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    menu: {
      color: string;
      home: string;
    }
  }
}