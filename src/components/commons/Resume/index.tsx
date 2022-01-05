/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'
import Card from '../Cards'
import Link from '../../foundation/Link'

function Resume () {
  return (
		<Box
			id='resumo'
			display='flex'
			flexDirection='column'
			style={{
			  alignItems: 'center',
			  margin: 'auto'
			}}
		>
			<Text
				variant='title'
				color='#1E32E1'
			>
				Resume
			</Text>

			<Box
				display='flex'
				flexDirection='column'
				width={{
				  md: '768px',
				  sm: 'auto',
				  lg: '992px'
				}}
				padding='auto'
				style={{
				  borderRadius: '20px',
				  paddingTop: ' 17px',
				  paddingBottom: ' 41px',
				  marginTop: '53px',
				  marginBottom: ' 41px',
				  textAlign: 'center',
				  backgroundColor: 'rgba(196, 196, 196, 0.43)'
				}}
			>
				<Box
					display='flex'
					margin='auto'
					maxWidth='576px'
				>
					<Text
						variant='title'
					>
						Minha tragetória profissional e acadêmica
					</Text>
				</Box>

					<div
						className='abilities'
					>
						<Card
							title='Desenvolvedor Freelancer'
							data='2021 - presente'
							option='work'
						>
							Desenvolvo aplicações web,
							levatando os requisitos necessários,
							projetando e trabalhando tanto do lado do cliente quanto do servidor.
							Testo, implemento e documento até a apresentação ao cliente.
						</Card>

						<Card
							title='Bootcamp Front-End JAMStack Alura'
							data='02/2021 - 06/2021'
							option='study'
						>
							Bootcamp dedicado a introduzir boas práticas de programação,
							componentização, testes, versionamento de códigos com o git,
							CI/CD, e diversas ferramentas como GraphQL,
							Next.js, API REST, JWT, Styled-Components e StoryBook
						</Card>

						<Card
							title='Certificado e cursos diversos'
						>
							Ao longo dos anos fiz diversos cursos,
							seja sobre docker, typescript até ferramentas na AWS.
							Todos os certificados podem ser visualizados no meu <Link
								href='https://www.linkedin.com/in/maxmilliano/'
								variant='paragraph1'
								color='blue'
							>
								Linkedin
							</Link>
						</Card>
					</div>

			</Box>

		</Box>
  )
}

export default Resume
