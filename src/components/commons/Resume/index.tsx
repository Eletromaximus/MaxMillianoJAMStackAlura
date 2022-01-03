/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'
// import WorkIcon from '@material-ui/icons/Work'

function Resume () {
  return (
		<Box
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
				  md: '954px',
				  sm: 'auto'
				}}
				padding='auto'
				style={{
				  borderRadius: '20px',
				  marginTop: '53px',
				  paddingTop: ' 17px',
				  paddingBottom: ' 100%',
				  textAlign: 'center',
				  backgroundColor: 'rgba(196, 196, 196, 0.43)'
				}}
			>
				<Box
					margin='auto'
					maxWidth='576px'
				>
					<Text
						variant='title'
					>
						Minha tragetória profissional e acadêmica
					</Text>
				</Box>

				<Box
					className='card'
					display='flex'
					justifyContent='center'
					flexDirection='column'
					style={{
					  paddingTop: '61px'
					}}

				>
					<Box
						maxWidth='300px'
						margin='auto'
						display='flex'
						flexDirection='column'
						style={{
						  alignItems: 'start'
						}}
					>
						<Text variant='titleXS'>
							<b>Desenvolvedor Freelancer</b>
						</Text>

						<Text paddingTop='10px' >
							2021 - presente
						</Text>

						<Text
							paddingTop='10px'
							textAlign='justify'
						>
						Desenvolvo aplicações web,
						levatando os requisitos necessários,
						projetando e trabalhando tanto do lado do cliente quanto do servidor.
						Testo, implemento e documento até a apresentação ao cliente.
						</Text>
					</Box>

				</Box>
			</Box>
		</Box>
  )
}

export default Resume
