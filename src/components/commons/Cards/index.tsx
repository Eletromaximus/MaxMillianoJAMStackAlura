/* eslint-disable no-mixed-spaces-and-tabs */
import { WorkOutlined, Book, Archive } from '@mui/icons-material'
import { useEffect, useState, ReactNode } from 'react'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'
interface IProps {
  data?: string,
  title: string,
  children: ReactNode,
  option?: string
}

export default function Card ({ title, data, children, option }: IProps) {
  const [icone, setIcone] = useState(<Archive />)
  const [info] = useState<IProps>({
    title, data, children
  })

  const selectIcone = () => {
    if (option === 'work') {
      return <WorkOutlined />
    }
    if (option === 'study') {
      return <Book />
    } else {
      return <Archive />
    }
  }

  useEffect(() => {
    setIcone(selectIcone)
  }, [option])

  return (

	<Box
		maxWidth='300px'
		margin='auto'
		flexDirection='row'
		display='flex'
		justifyContent='center'
		style={{
		  paddingTop: '61px'
		}}
	>

		<Box
			display='flex'
			flexDirection='column'
			style={{
			  alignItems: 'center'
			}}
		>
			{icone}

			<div
				className="line"
				style={{
				  width: '1px',
				  height: '100%',
				  border: '1px solid #000000'
				}}
			/>
		</Box>

		<Box
		flexDirection='column'
		display='flex'
		style={{
		  marginLeft: '20px',
		  alignItems: 'start'
		}}
		>
			<Text variant='titleXS'>
				<b>{info.title}</b>
			</Text>

			<Text paddingTop='10px' >
				{info.data}
			</Text>

			<Text
				paddingTop='10px'
				textAlign='justify'
			>
				{info.children}
			</Text>
		</Box>

	</Box>
  )
}
