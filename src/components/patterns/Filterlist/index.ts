/* eslint-disable camelcase */
interface IGithub {
  name: string;
  html_url: string;
  fork: boolean;
  updated_at: string;
  id: number;
}

export default async function FilterList () {
  const listRepostories: IGithub[] = await fetch(
    'https://api.github.com/users/eletromaximus/repos'
  )
    .then((response) => response.json())

  if (listRepostories.length >= 2) {
    const repositories = listRepostories
      .filter((repository) => !repository.fork)
      .sort((a, b) => {
        if (new Date(a.updated_at) < new Date(b.updated_at)) {
          return 1
        }
        if (new Date(a.updated_at) > new Date(b.updated_at)) {
          return -1
        }
        return 0
      })
      .map((repository) => {
        return {
          name: repository.name,
          url: repository.html_url,
          id: repository.id
        }
      })
    return repositories
  }
}
