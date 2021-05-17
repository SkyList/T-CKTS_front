import { useEffect, useState } from 'react'

export const THEMES = {
  light: 'lightTheme',
  dark: 'darkTheme'
}

export function useTheme() {
  const [theme, setTheme] = useState(THEMES.light)

  function swithTheme() {
    if (theme === THEMES.light) {
      setTheme(THEMES.dark)
    } else {
      setTheme(THEMES.light)
    }
  }

  return [theme, swithTheme]
}
