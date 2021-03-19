import React from 'react'
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
		<>
			<CardWrapper>
				<CardWrapper.Image src={url} alt={alt} />
					<Text
            href={href}
						variant='title'
					>
							{title}
					</Text>
			</CardWrapper>
		</>
  )
}
