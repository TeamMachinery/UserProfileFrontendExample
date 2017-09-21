import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Articles from './Articles'
import Content from '../common/Content'

const TabContent = ({ match, articles }) => (
  <Content removeSpace>
    <Route
      exact
      path={`${match.path}`}
      render={() => <Articles articles={articles} clickableCategories />}
    />
  </Content>
)

TabContent.propTypes = {
  articles: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

export default TabContent
