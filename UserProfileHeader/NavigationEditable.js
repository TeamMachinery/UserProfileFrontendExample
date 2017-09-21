import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import Tabs from './Tabs'

const NavigationEditable = ({ match }) => (
  <Tabs>
    <Tab label="Drafts" to={`${match.url}`} exact />
    <Tab label="Articles" to={`${match.url}/articles`} />
    <Tab label="Settings" to={`${match.url}/settings`} />
  </Tabs>
)

NavigationEditable.propTypes = {
  match: PropTypes.object.isRequired,
}

export default NavigationEditable
