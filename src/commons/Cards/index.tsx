import React from 'react'
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
					<CardWrapper.Title>
						<a href={href} rel="noreferrer" target="_blank">
							{title}
						</a>
					</CardWrapper.Title>
			</CardWrapper>
		</>
  )
}
