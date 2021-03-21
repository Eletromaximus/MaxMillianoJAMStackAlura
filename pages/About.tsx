import React from 'react'
import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'

function AboutScreen () {
  return <div>olÁ</div>
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headeTitle: 'About'
    },
    pageBoxProps: {
      flex: 'wrap',
      justifyContent: 'space-between'
    }
  }
})
