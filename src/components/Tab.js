import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import CIcon from '@coreui/icons-react'
import svgImage from '../../public/p.svg'
import { prosp } from '../assets/brand/prosp'
const CenteredTabs = () => {
  const [value, setValue] = React.useState(0)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs>
        <div className="classAssignmentTabsInner d-flex justify-content-center">
          <TabList >
            <Tab>
              <img src={svgImage} alt="Home" />
              Prospect on Facebook
            </Tab>
            <Tab>Title 2</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  )
}
export default CenteredTabs
