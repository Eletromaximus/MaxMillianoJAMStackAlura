import React from 'react'

import { ModalWrapper } from './styles'

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
}

export default function Modal ({ isOpen, onClose, children }: IModal) {
  return (
    <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      // @ts-ignore
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]')

      if (!isSafeArea) {
        onClose()
      }
    }}
    >
      {/* {children({
        'data-modal-safe-area': 'true'
      })} */}Testando
    </ModalWrapper>
  )
}
