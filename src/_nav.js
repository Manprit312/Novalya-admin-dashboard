import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import {dashboard} from './assets/brand/dashboard'
import { crm } from './assets/brand/crm'
import { nova } from './assets/brand/nova'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { prosp } from './assets/brand/prosp'
import { ai } from './assets/brand/ai'
import { library } from './assets/brand/library'
import { affilia } from './assets/brand/affilia'
import { up } from './assets/brand/upgrade'
import { Profile } from './assets/brand/profile'
import { logout } from './assets/brand/logout'


const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={dashboard} customClassName="nav-icon" fill="none" />,
    badge: {
      color: 'none',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Prospection',
    to: '/theme/colors',
    icon: <CIcon icon={prosp} customClassName="nav-icon"  />,
  },
  {
    component: CNavItem,
    name: 'CRM',
    to: '/theme/typography',
    icon: <CIcon icon={crm} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Nova Data',
    to: '/base',
    icon: <CIcon icon={nova} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Comment AI',
    to: '/base/accordian',
    icon: <CIcon icon={ai} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Library',
    to: '/base',
    icon: <CIcon icon={library} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Section',
        to: '/base/breadcrum',
      },
      
    ],
     
    
  },
  {
    component: CNavGroup,
    name: 'Affiliate',
    to: '/buttons',
    icon: <CIcon icon={affilia} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Section',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Message',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Upgrade',
    to: '/charts',
    icon: <CIcon icon={up} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/charts',
    icon: <CIcon icon={Profile} customClassName="nav-icon" />,
  },
 

  {
    component: CNavItem,
    name: 'Logout',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={logout} customClassName="nav-icon" />,
  },
]

export default _nav
