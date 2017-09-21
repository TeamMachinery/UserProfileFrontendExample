import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'
import NoResult from '../common/NoResult'

const Articles = ({ articles, clickableCategories, editable }) => (
  <div>
    {articles && articles.length > 0 ? (
      articles.map(article => (
        <Article
          key={article.id}
          editable={editable}
          clickableCategories={clickableCategories}
          {...article}
        />
      ))
    ) : (
      <NoResult />
    )}
  </div>
)

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickableCategories: PropTypes.bool,
  editable: PropTypes.bool.isRequired,
}

Articles.defaultProps = {
  clickableCategories: false,
}

export default Articles
