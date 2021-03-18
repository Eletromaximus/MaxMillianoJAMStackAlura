import React, { createContext, useState } from 'react'
import Capa from '../../commons/Capa'
import Footer from '../../commons/Footer'
import Menu from '../../commons/Menu'
import Modal from '../../commons/Modal'
import { Box } from '../../foundation/layout/Box'
import FormCadastro from '../../patterns/FormCadastro'

interface IWebsitePagesWrapper {
  children: React.ReactNode;
  seoProps: {
    headTitle: string;
  };
  pageBoxProps: {
    backgroundImage: string,
    backgroundRepeat: string,
    backgroundPosition: string,
  };
  menuProps: {
    display: boolean;
  };
}

export const WebsitePagesContext = createContext({
  toggleModalCadastro: () => {}
})

export default function WebsitePagesWrapper ({
  children,
  seoProps,
  pageBoxProps,
  menuProps
}: IWebsitePagesWrapper) {
  const [isModalOpen, setIsModalState] = useState(false)

  return (
    <WebsitePagesContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalState(!isModalOpen)
        }
      }}
    >
      {/* <SEO {...seoProps}/> */}
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
      {...pageBoxProps}
    >

      {menuProps && (
        <>
          <Capa/>
          <Menu onClick={() => setIsModalState(!isModalOpen)} />
        </>
      )}

      <Modal
				isOpen={isModalOpen}
				onClose={() => { setIsModalState(false) }}>
				{(propsDoModal: any) => (
					<FormCadastro
						propsDoModal={propsDoModal}
						Close={() => setIsModalState(false)}
					/>
				)}
			</Modal>

      {children}

      <Footer/>

    </Box>
    </WebsitePagesContext.Provider>
  )
}

WebsitePagesWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true
  }
}
