import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'
import AboutScreen from '../src/components/screens/AboutScreen'
import FilterList from '../src/components/patterns/Filterlist'

export default websitePageHOC(AboutScreen)

export async function getStaticProps () {
  const repositories = await FilterList()

  if (repositories) {
    return {
      props: {
        seoProps: {
          headTitle: 'Sobre mim'
        },
        repositories
      }
    }
  } else {
    return {
      notFound: true
    }
  }
}
