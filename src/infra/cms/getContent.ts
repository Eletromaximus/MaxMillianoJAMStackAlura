import { CMSGraphQLClient, gql } from './CMSGraphQl'

interface IProps {
  preview: boolean
}

export default async function getContent ({ preview }: IProps) {
  const query = gql`
  query {
    allProjetos{
      name,
      description,
      imagemDoProjeto {
        url
      },
      url,
      idDoProjeto
    }
  }
`
  const client = CMSGraphQLClient({ preview })

  const response = await client.query({ query })

  return response.data.allProjetos
}
