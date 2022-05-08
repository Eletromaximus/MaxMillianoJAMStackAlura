import Head from 'next/head'

function SEO ({ headTitle }: any) {
  const pageTitleDefault = 'Portifólio de Max Milliano'
  const description = 'Portifólio pessoal de programação focado em React e Node'
  const urlBase = 'https://portifolio-maxmillianox.vercel.app'
  const title = `${pageTitleDefault}`
  const image = 'https://pbs.twimg.com/profile_images/1521086557373009920/9xcS5ExT_400x400.jpg'

  return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title}/>
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website"/>
			<meta property="og:url" content={urlBase} />
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={image}/>

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary"/>
			<meta property="twitter:site" content="@MillianoSouza"/>
			<meta property="twitter:url" content={urlBase} />
			<meta property="twitter:title" content={title}/>
			<meta property="twitter:description" content={description}/>
			<meta property="twitter:image" content={image}/>

			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		</Head>
  )
}

export default SEO
