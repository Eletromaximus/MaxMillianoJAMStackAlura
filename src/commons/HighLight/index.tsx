import React from 'react';

import { CardWrapper } from './styles';

interface Props {
 url: string;
 title: string;
 description: string;
 alt: string;
 endereco: string;
}

function CardHighlight({ url, title, alt, description, endereco }: Props) {
	return (
		<>
			<CardWrapper>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Description>
						<CardWrapper.Title>
							<a href={endereco}>
							  {title}
							</a>
						</CardWrapper.Title>
						<CardWrapper.Text>{description}</CardWrapper.Text>
					</CardWrapper.Description>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}

export default CardHighlight;