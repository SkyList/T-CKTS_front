export const theme = {
  colors: {
    background: '#f7f7fa',

    text: '#121214',

    primary: '#008bd2',
    primary_light: '#5ebbff',
    primary_dark: '#005ea0',

    secondary: '#005890',
    secondary_light: '#4b84c1',
    secondary_dark: '#003062'
  }
}

export const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors
  }
}

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#121214',
    text: '#e1e1e6'
  }
}


export default {
  theme,
  lightTheme,
  darkTheme
}
