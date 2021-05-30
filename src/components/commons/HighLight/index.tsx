import React from 'react'
import Button from '../../foundation/Button'
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

function CardHighlight ({ url, title, alt, description, endereco, variant }: Props) {
  return (
		<Button
			href={endereco}
			width='100%'
		>
			<CardWrapper >
				<CardWrapper.Image src={url} alt={alt} />
					<CardWrapper.Footer>
						<CardWrapper.Description>
							<Text variant={variant} >
								{title}
							</Text>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</Button>

  )
}

export default CardHighlight
