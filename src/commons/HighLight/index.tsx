import React from 'react'
import Link from '../../components/foundation/Link/index'

import { CardWrapper } from './styles'

interface Props {
 url: string;
 title: string;
 description: string;
 alt: string;
 endereco: string;
 variant: string;
 color?: string;
}

function CardHighlight ({ url, title, alt, description, endereco, variant, color }: Props) {
  return (
		<>
			<CardWrapper >
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Description>
						<Link variant={variant} href={endereco} color={color} target="_blanck">
								{title}
						</Link>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
  )
}

export default CardHighlight
