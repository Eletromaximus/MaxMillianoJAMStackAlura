
import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'
import HomeScreen from '../src/components/screens/HomeScreen'

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    footerProps: true,
    capaProps: true,
    menuProps: true
  }
})
