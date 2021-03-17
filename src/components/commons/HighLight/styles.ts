import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'
import typographys from '../../../theme/typographyVariants'
// import { TextStyleVariants } from '../../components/fundation/Text'

// interface Props {
//   variant: string;
// }

export const CardWrapper: any = styled.div`
	height: auto;
	border-radius: 5px;
	border: 1px solid #c1c1c1;
	padding: 10px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 5px;
	flex: 1 350px;
	transition: all 200ms linear;
	cursor: pointer;
	margin-bottom: 24px;

	${breakpointsMedia({
		md: css`
			display: flex;
			align-items: center;
		`
	})}
	&:hover {
		transform: scale(0.98) translateY(-5px);
		box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
		border-radius: 0;
	}
`

CardWrapper.Image = styled.img`
	max-width: 100%;
	object-fit: cover;
	border-radius: 5px;
	${breakpointsMedia({
		md: css`
			height: 250px;
		`
	})}
`

CardWrapper.Footer = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`

CardWrapper.Description = styled.div`
	padding: 10px;
	& h2 {
		margin-bottom: 24px;
	}
`
/* font-size: ${() => typographys.subtitle.fontSize};
	font-weight: ${() => typographys.subtitle.fontWeight};
	line-height : ${() => typographys.subtitle.lineHeight}; */
// CardWrapper.Title = styled.h2<Props>`

//   ${({ variant }) => TextStyleVariants[variant]}
// 	a{
// 		text-decoration: none;

// 		color: ${({ theme }) => theme.colors.text};
// 	}
// `

CardWrapper.Text = styled.p`
	font-size: ${() => typographys.paragraph2.fontSize};
	font-weight: ${() => typographys.paragraph2.fontWeight};
	line-height : ${() => typographys.paragraph2.lineHeight};
`
