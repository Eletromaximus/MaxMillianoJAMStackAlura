/* eslint-disable camelcase */
// import React from 'react'
import websitePageHOC from '../../src/components/wrappers/WebsitePages/hoc'
import ProjectScreen from '../../src/components/screens/ProjectScreen'
import { getContent } from './getContent'

export default websitePageHOC(ProjectScreen)

interface IParams {
  params?: any;
  preview: boolean;
}
// const preview = false
export async function getStaticProps ({ params, preview }: IParams) {
  const projetos = await getContent({ preview })

  if (projetos.allProjetos.length <= 0) {
    console.log('entrou aqui')
    return {
      notFound: true
    }
  }

  const projeto = projetos.allProjetos
    .find((element: any) => (
      JSON.stringify(element.idDoProjeto) === String(params.id)
    ))

  return {
    props: {
      projeto,
      pageWrapperProps: {
        seoProps: {
          headTitle: projeto.name
        }
      }
    }
  }
}

export async function getStaticPaths ({ preview }: IParams) {
  const projetos = await getContent({ preview })

  const idsList = projetos.allProjetos.map((elemento: any) => {
    return JSON.stringify(elemento.idDoProjeto)
  })

  const ids = idsList.map((elemento: any) => {
    return { params: { id: elemento } }
  })

  return {
    paths: ids,
    fallback: false
  }
}
