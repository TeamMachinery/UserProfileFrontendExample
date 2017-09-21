import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import Tabs from './Tabs'

const Navigation = ({ match }) => (
  <Tabs>
    <Tab label="Articles" to={`${match.url}`} exact />
  </Tabs>
)

Navigation.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Navigation
