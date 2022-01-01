
import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'
import HomeScreen from '../src/components/screens/HomeScreen'

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    footerProps: true,
    capaProps: true,
    menuProps: true
  }
})
