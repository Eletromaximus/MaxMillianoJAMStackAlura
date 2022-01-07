import React from 'react'
import Head from 'next/head'

function SEO ({ headTitle }: any) {
  const pageTitleDefault = 'Portifólio - Max Milliano'
  const description = 'Portifólio pessoal de programação'
  const urlBase = 'https://portifolio-maxmillianox.vercel.app'
  const title = `${headTitle}` || `${pageTitleDefault}`

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

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={urlBase} />
			<meta property="twitter:title" content={title}/>
			<meta property="twitter:description" content={description}/>

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0 maximum-scale=1"
			/>
		</Head>
  )
}

export default SEO
