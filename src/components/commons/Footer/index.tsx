import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { FooterWrapper } from './styles'
import Button from '../../foundation/Button'

export default function Footer () {
  return (
    <FooterWrapper>
      <Button
        variant='paragraph1'
        href='https://github.com/Eletromaximus'
        color='black'
      >
        <GitHubIcon fontSize='large' />
      </Button>

      <Button
        variant='paragraph1'
        href='https://www.linkedin.com/in/maxmilliano/'
        color='black'
      >
        <LinkedInIcon fontSize='large' />
      </Button>
    </FooterWrapper>
  )
}
