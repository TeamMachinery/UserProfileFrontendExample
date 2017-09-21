import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, createStyleSheet } from 'material-ui/styles'

const ArticleCategories = ({ categories, classes }) => {
  if (!categories) {
    return <div className={classes.path}>Please select a category</div>
  }

  return (
    <div className={classes.path}>
      {categories &&
        categories.length > 0 &&
        categories.map((category, i, arr) => {
          const divider = i < arr.length - 1 && <span> &gt; </span>

          return (
            <span key={category.id} className={classes.highlight}>
              <span>{category.name}</span>
              {divider}
            </span>
          )
        })}
    </div>
  )
}

ArticleCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = createStyleSheet('CategoryPath', () => ({
  default: {
    fontFamily: 'Lato',
    fontSize: '14px',
    color: '#F26724',
  },
  highlight: {
    color: '#2F343B',
  },
  path: {
    extend: 'default',
    display: 'inline-block',
    '& a': {
      extend: 'default',
      textDecoration: 'none',
    },
  },
}))

export default withStyles(styles)(ArticleCategories)
