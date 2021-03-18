import React from 'react'
import Link from '../../foundation/Link'
import { CardWrapper } from './styles'
interface Props {
  url: string;
  title: string;
  alt: string;
  href: string;
  target?: string;
}

export default function Card ({ url, title, alt, href, target }: Props) {
  return (
		<>
			<CardWrapper>
				<CardWrapper.Image src={url} alt={alt} />
					<Link
            href={href}
						variant='title'
						target={ target }
					>
							{title}
					</Link>
			</CardWrapper>
		</>
  )
}
