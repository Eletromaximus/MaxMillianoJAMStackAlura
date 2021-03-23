/* eslint-disable camelcase */
import React from 'react'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'
import Image from 'next/image'

interface IProjectGithub {
	project: {name: string,
	html_url: string,
	description: string,
	blobs_url: string
}}

export default function ProjectScreen ({ project }: IProjectGithub) {
  return (
      <Box display='flex' flexDirection='column' flex='1'>

				<Grid.Container style={{ flex: 1 }}>
					<Text>
						{project.name}
					</Text>
					<Text>
						{project.description}
					</Text>
					<Text
					  href={project.html_url}
					>
						{project.html_url}
					</Text>
					<Image
					  src={project.blobs_url}
						width={200}
						height={200}
					/>
				</Grid.Container>
			</Box>
  )
}

ProjectScreen.defaultProps = {
  blobs_html: ''
}
