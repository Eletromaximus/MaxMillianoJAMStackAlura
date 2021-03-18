import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { FooterWrapper } from './styles'
import { Button } from '@material-ui/core'

export default function Footer () {
  return (
    <FooterWrapper>
      <Button
        href='https://github.com/Eletromaximus'
        target='_blank'
      >
        <GitHubIcon />
      </Button>

      <Button
        href='https://www.linkedin.com/in/maxmilliano/'
        target='_blank'
      >
        <LinkedInIcon />
      </Button>
    </FooterWrapper>
  )
}
