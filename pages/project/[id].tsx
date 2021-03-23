/* eslint-disable camelcase */
// import React from 'react'
import websitePageHOC from '../../src/components/wrappers/WebsitePages/hoc'
import ProjectScreen from '../../src/components/screens/ProjectScreen'

interface IProjectGithub {
	name: string,
	html_url: string,
	description: string,
	blobs_url?: string,
}

export default websitePageHOC(ProjectScreen)

export async function getStaticProps ({ params } : any) {
  const repostoriesData = await fetch('https://api.github.com/users/eletromaximus/repos')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json()
      return resposta
    })

  const projectData = repostoriesData.find((element: any) => (JSON.stringify(element.id) === params.id))
  const project: IProjectGithub = {
    name: projectData.name,
    html_url: projectData.html_url,
    description: projectData.description,
    blobs_url: projectData.blobs_url
  }

  return {
    props: {
      project,
      pageWrapperProps: {
        seoProps: {
          headTitle: project.name
        }
      }
    }
  }
}

export async function getStaticPaths () {
  const repostoriesData = await fetch('https://api.github.com/users/eletromaximus/repos')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json()
      return resposta
    })

  const idsList: any[] = repostoriesData.map((elemento: any) => {
    return JSON.stringify(elemento.id)
  })

  const ids = idsList.map((elemento: any) => {
    return { params: { id: elemento } }
  })

  return {
    paths: ids,
    fallback: false
  }
}
