/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable camelcase */
import React from 'react'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'
import Image from 'next/image'

interface IProjectGithub {
	projeto: {
		name: string,
		description: string,
		imagemDoProjeto: {
			url: string
		},
		url: string,
		idDoProjeto: number
	}
}

export default function ProjectScreen ({ projeto } : IProjectGithub) {
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
					{ projeto.imagemDoProjeto.url && <Image
						src={projeto.imagemDoProjeto.url}
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
						{projeto.name}
					</Text>

					<Text
						variant='paragraph1'
						tag='p'
						color='secundary'
					>
						{projeto.description}
					</Text>

					<Text
						variant='paragraph1'
						href={projeto.url}
					>
						{projeto.url}
					</Text>
				</Grid.Col>
			</Box>
  )
}
