import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { Charts } from './components/Charts'
import { Feeds } from './components/Feeds'
import { Lists } from './components/Lists'
import { Tables } from './components/Tables'
import { Mixed } from './components/Mixed'
import { Statistics } from './components/Statistics'
import Excel from './components/Excel'
import MyCarousel from './components/MyCarousel'
import MyTable from './components/MyTable'
import Animation from './components/Animation'
const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Widgets',
    path: '/crafted/widgets/charts',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const WidgetsPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/crafted/widgets/excel'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Excels</PageTitle>
        <Excel />
      </Route>
      <Route path='/crafted/widgets/carousel'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Carousel</PageTitle>
        <MyCarousel />
      </Route>
      <Route path='/crafted/widgets/lists'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Lists</PageTitle>
        <Lists />
      </Route>
      <Route path='/crafted/widgets/table'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Table</PageTitle>
        <MyTable />
      </Route>
      <Route path='/crafted/widgets/Animation'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Animation</PageTitle>
        <Animation />
      </Route>
      <Route path='/crafted/widgets/statistics'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
        <Statistics />
      </Route>
      <Route path='/crafted/widgets/charts'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Charts</PageTitle>
        <Charts />
      </Route>
      <Route path='/crafted/widgets/mixed'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Mixed</PageTitle>
        <Mixed />
      </Route>
      <Route path='/crafted/widgets/Graphics'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Graphics</PageTitle>
        <Tables />
      </Route>
      <Route path='/crafted/widgets/feeds'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Feeds</PageTitle>
        <Feeds />
      </Route>
      <Redirect from='/crafted/widgets' exact={true} to='/crafted/widgets/lists' />
      <Redirect to='/crafted/widgets/lists' />
    </Switch>
  )
}

export default WidgetsPage
