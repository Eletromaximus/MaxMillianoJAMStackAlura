import styled from 'styled-components'
// import typographys from '../../components/theme/typographyVariants'

export const CardWrapper: any = styled.div`
  margin: 10px;
  text-decoration: none;
	max-height: 350px;
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
	&:hover {
		transform: scale(0.98) translateY(-5px);
		box-shadow: 0 3px 25px rgba(0, 0, 0, 0.4);
		border-radius: 0;
	}
	Link {
		height: 30%;
	}
`

CardWrapper.Image = styled.img`
	max-width: 100%;
	height: 70%;
	object-fit: cover;
	border-radius: 5px;

`

// CardWrapper.Description = styled.div`
// 	padding: 10px;
// 	& h2 {
// 		margin-bottom: 24px;
// 	}
// `

// CardWrapper.Text = styled.p`
// 	font-size: ${typographys.paragraph2.fontSize};
// 	font-weight: ${typographys.paragraph2.fontWeight};
// 	line-height: ${typographys.paragraph2.lineHeight};
// `
