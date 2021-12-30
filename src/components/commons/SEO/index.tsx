import React from 'react'
import Head from 'next/head'

function SEO ({ headTitle }: any) {
  const pageTitleDefault = 'Portifólio - Projeto Desafio do Alura Bootcamp'
  const description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'
  const image = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png'
  const urlBase = 'https://portifolio-puce-nine.vercel.app'
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
			<meta property="og:image" content={image} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={urlBase} />
			<meta property="twitter:title" content={title}/>
			<meta property="twitter:description" content={description}/>
			<meta property="twitter:image" content={image} />

			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
  )
}

export default SEO
