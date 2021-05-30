import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../../../theme/GlobalStyle'
import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'
import dark from '../../../../theme/themes/dark'
import light from '../../../../theme/themes/light'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})
export default function WebsiteGlobalProvider ({ children }: any) {
  const [theme, setTheme] = useState(dark)

  useEffect(() => {
    const mode = localStorage.getItem('themeMode')
    if (mode === null) {
      useState(dark)
    }
    if (mode === theme.title) {
      setTheme(toogleTheme())
      localStorage.setItem('themeMode', theme.title)
    }
  }, [])

  function toogleTheme () {
    const res = theme.title === 'light' ? dark : light
    return res
  }

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => {
        setTheme(
          toogleTheme()
        )
        localStorage.setItem('themeMode', theme.title)
      }
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
