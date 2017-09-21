import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Articles from './Articles'
import Content from '../common/Content'
import Settings from './Settings'

const TabContentEditable = ({ match, drafts, articles }) => (
  <Content removeSpace>
    <Route
      exact
      path={`${match.path}`}
      render={() => <Articles articles={drafts} editable />}
    />
    <Route
      path={`${match.path}/articles`}
      render={() => (
        <Articles articles={articles} clickableCategories editable />
      )}
    />
    <Route path={`${match.path}/settings`} render={() => <Settings />} />
  </Content>
)

TabContentEditable.propTypes = {
  articles: PropTypes.array.isRequired,
  drafts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

export default TabContentEditable
