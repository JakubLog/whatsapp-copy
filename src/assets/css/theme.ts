export interface themeProps {
  colors: {
    tealGreen: string;
    tealGreenDark: string;
    lightGreen: string;
    blue: string;
  };
  shadows: {
    primary: string;
  };
}

export const theme: themeProps = {
  colors: {
    tealGreen: '#128C7E',
    tealGreenDark: '#075E54',
    lightGreen: '#25D366',
    blue: '#34B7F1'
  },
  shadows: {
    primary: '0 2px 15px -12px #000'
  }
};
