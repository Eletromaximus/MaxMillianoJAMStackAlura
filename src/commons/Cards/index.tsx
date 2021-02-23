import React from 'react';
import { CardWrapper } from './styles';

interface Props {
  url: string;
  title: string;
  alt: string;
}


export default function Card({ url, title, alt }: Props) {
	return (
		<>
			<CardWrapper>
				<CardWrapper.Image src={url} alt={alt} />
				<CardWrapper.Footer>
					<CardWrapper.Title>{title}</CardWrapper.Title>
				</CardWrapper.Footer>
			</CardWrapper>
		</>
	);
}