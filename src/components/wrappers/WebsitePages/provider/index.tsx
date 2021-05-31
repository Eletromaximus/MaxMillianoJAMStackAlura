import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../../../theme/GlobalStyle'
import PropTypes from 'prop-types'
import React, { createContext } from 'react'
import useLocalStorage from '../../../../hook/useLocalStorage'
import dark from '../../../../theme/themes/dark'
import light from '../../../../theme/themes/light'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})
export default function WebsiteGlobalProvider ({ children }: any) {
  const [theme, setTheme] = useLocalStorage('theme', dark)

  function toggleDark () {
    theme === dark ? setTheme(light) : setTheme(dark)
  }

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => { toggleDark() }
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
