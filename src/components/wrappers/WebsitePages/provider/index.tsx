/* eslint-disable dot-notation */
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../../../theme/GlobalStyle'
import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'
import dark from '../../../../theme/themes/dark'
import light from '../../../../theme/themes/light'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})
export default function WebsiteGlobalProvider ({ children }: any) {
  const [theme, setTheme] = useState(dark)

  function createTheme () {
    const DAY_IN_SECONDS = 86400
    setCookie(null, 'theme', theme.title, {
      path: '/',
      maxAge: DAY_IN_SECONDS * 7
    })
  }

  function removeCookie () {
    destroyCookie(null, 'theme', { path: '/' })
  }

  function toggleDark () {
    const cookies = parseCookies()
    const tema = cookies['theme']
    removeCookie()
    tema === 'dark' ? setTheme(light) : setTheme(dark)
  }

  function detectMode () {
    const cookies = parseCookies()
    const tema: string = cookies['theme']
    if (tema) {
      setTheme(
        tema === 'dark' ? dark : light
      )
    } else {
      createTheme()
    }
  }

  useEffect(() => {
    detectMode()
  }, [theme])

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => toggleDark()
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}

WebsiteGlobalProvider.defaultProps = {
  children: PropTypes.node.isRequired
}
