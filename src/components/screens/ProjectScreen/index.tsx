/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable camelcase */
import React from 'react'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'
import Image from 'next/image'

interface IProjectGithub {
	project: {
	name: string,
	html_url: string,
	description: string,
	blobs_url: string
}}

const imageLinks = [
  {
    title: 'PomodoroClock',
    url: 'https://raw.githubusercontent.com/Eletromaximus/PomodoroClock/master/pomodoro.png'
  },

  {
    url: 'https://raw.githubusercontent.com/Eletromaximus/semanaomnistack11/master/x2.png',
    title: 'semanaomnistack11'
  },

  {
    url: 'https://raw.githubusercontent.com/Eletromaximus/NLW3/master/x.png',
    title: 'NLW3'
  },

  {
    url: 'https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png',
    title: 'InstaAlura'
  }
]

export default function ProjectScreen ({ project }: IProjectGithub) {
  const sourceLink = imageLinks.find((img: {title: string, url: string}) => img.title === project.name)
  return (
      <Box
				display='flex'
				justifyContent='center'
				flexDirection={{
				  lg: 'row',
				  md: 'column',
				  sm: 'column',
				  xs: 'column'
				}}
				flex='1'
				style={{ paddingTop: 20 }}
			>
				<Grid.Row
					paddingRight={{ md: 20 }}
					style={{ minWidth: '700px' }}
				>
					{ sourceLink && <Image
						src={sourceLink.url}
						width={750}
						height={550}
					/>}
				</Grid.Row>
				<Grid.Col
					offset={{ lg: 1, md: 0, sm: 0 }}
					value={{ lg: 3 }}
					display='flex'
					flex={1}
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					style={{ textAlign: 'center' }}
				>
					<Text
						tag='h1'
						variant='title'
						textAlign='center'
					>
						{project.name}
					</Text>

					<Text
						variant='navbar'
						tag='p'
						color='secundary'
					>
						{project.description}
					</Text>

					<Text
						variant='paragraph1'
						href={project.html_url}
					>
						{project.html_url}
					</Text>
				</Grid.Col>
			</Box>
  )
}

ProjectScreen.defaultProps = {
  blobs_html: ''
}
