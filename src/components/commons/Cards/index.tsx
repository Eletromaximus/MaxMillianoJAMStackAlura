import React from 'react'
import Button from '../../foundation/Button'
import Text from '../../foundation/Text'
import { CardWrapper } from './styles'
interface Props {
  url: string;
  title: string;
  alt: string;
  href: string;
}

export default function Card ({ url, title, alt, href }: Props) {
  return (
			<CardWrapper>
				<Button
					padding='none'
					href={href}
				>
					<CardWrapper.Image src={url} alt={alt} />
						<Text
							variant='title'
						>
							{title}
					</Text>
				</Button>
			</CardWrapper>
  )
}
