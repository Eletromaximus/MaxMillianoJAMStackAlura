import React, { createContext, useContext, useEffect, useState } from 'react'
import Capa from '../../commons/Capa'
import Footer from '../../commons/Footer'
import Menu from '../../commons/Menu'
import { Box } from '../../foundation/layout/Box'
import { ModeContext } from '../WebsitePages/provider'

interface IWebsitePagesWrapper {
  children: React.ReactNode;
  pageBoxProps: {
    backgroundImage: string,
    backgroundRepeat: string,
    backgroundPosition: string,
  };
  menuProps: boolean
  capaProps: boolean
  footerProps: boolean
}

export const WebsitePagesContext = createContext({
  toggleModalCadastro: () => {}
})
export default function WebsitePagesWrapper ({
  children,
  pageBoxProps,
  menuProps,
  capaProps,
  footerProps
}: IWebsitePagesWrapper) {
  const [isModalOpen, setIsModalState] = useState(false)
  const [width, setWindowWidth] = useState(0)
  const modeChangeContext = useContext(ModeContext)

  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () =>
      window.removeEventListener('resize', updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <WebsitePagesContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalState(!isModalOpen)
        }
      }}
    >
      <Box
        display='flex'
        flex='1'
        flexDirection='column'
        {...pageBoxProps}
      >
        {menuProps &&
            <Menu
              onClick={() => setIsModalState(!isModalOpen)}
              changeMode={() => {
                modeChangeContext.toggleModeContext()
              }}
              width={width}
            />
        }

        { capaProps && <Capa/>}

        {children}

        {footerProps && <Footer/>}

      </Box>
    </WebsitePagesContext.Provider>
  )
}

WebsitePagesWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: true,
  capaProps: true,
  footerProps: true
}
