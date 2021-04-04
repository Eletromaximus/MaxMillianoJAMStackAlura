import React from 'react'
import Text from '../../foundation/Text/index'

import { CardWrapper } from './styles'

interface Props {
 url: string;
 title: string;
 description: string;
 alt: string;
 endereco: string;
 variant: string;
 color?: string;
//  target?: string;
}

function CardHighlight ({ url, title, alt, description, endereco, variant, ...props }: Props) {
  return (
		<>
			<CardWrapper >
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Description>
						<Text variant={variant} href={endereco} {...props} >
								{title}
						</Text>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
  )
}

export default CardHighlight
