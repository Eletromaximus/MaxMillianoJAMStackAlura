export interface ITypography {
  [title: string]: {
    fontSize: string,
    fontWeight: string,
    lineHeight: number
  }
}

const typographyVariants: ITypography = {
  title: {
    fontSize: '32px',
    fontWeight: '900',
    lineHeight: 1.25
  },
  titleXS: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25
  },
  paragraph1: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25
  },
  paragraph2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25
  },
  smallestException: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1
  },
  navBar: {
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: 1.25
  }
}

export default typographyVariants
