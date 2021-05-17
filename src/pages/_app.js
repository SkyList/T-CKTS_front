import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useTheme, THEMES } from '../hooks/useTheme'

import GlobalStyle from '../styles/global'
import Theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  const [selectedTheme, switchTheme] = useTheme()
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  const a = () => switchTheme()

  console.log(selectedTheme)

  return (
    <ThemeProvider theme={Theme[selectedTheme]}>
      <Layout>
        <button onClick={a} >a</button>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
