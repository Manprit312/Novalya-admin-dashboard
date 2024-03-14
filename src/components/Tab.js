import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import CIcon from '@coreui/icons-react'
import svgImage from '../../public/p.svg'
import { prosp } from '../assets/brand/prosp'
import birth from '../../public/b.svg'
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
          <TabList>
            <Tab>
              <img src={svgImage} alt="Home" />
              Prospect on Facebook
            </Tab>
            <Tab>
              <img src={birth} alt="birthday" />
              Wish Birthdays
            </Tab>
            <Tab>
              <img src={birth} alt="birthday" />
              Manage Requests
            </Tab>
            <Tab>
              <img src={birth} alt="birthday" />
              Instagram
            </Tab>
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
