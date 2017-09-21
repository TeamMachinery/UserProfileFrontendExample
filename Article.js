import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles, createStyleSheet } from 'material-ui/styles'

import ArticleCategories from './ArticleCategories'
import ArticleTitle from '../common/ArticleTitle'
import Button from '../common/Button'
import ClickableCategories from '../common/CategoryPath'
import Date from '../common/Date'
import { TrashIcon } from '../common/icons'
import { openDeleteArticleConfirmationDialog } from '../../actions'

class Article extends React.Component {
  deleteArticle = () =>
    this.props.openDeleteArticleConfirmationDialog(this.props.id)

  render() {
    const {
      categories,
      classes,
      clickableCategories,
      editable,
      id,
      publishedAt,
      title,
    } = this.props
    const CategoryComponent = clickableCategories
      ? ClickableCategories
      : ArticleCategories
    return (
      <div className={classes.container}>
        {editable && (
          <span className={classes.delete}>
            <Button
              onClick={this.deleteArticle}
              type="simple"
              className={classes.delete}
            >
              <TrashIcon />
            </Button>
          </span>
        )}
        <ArticleTitle title={title} articleId={id} />
        {publishedAt && <Date date={publishedAt} />}
        {categories &&
        categories.length > 0 && <CategoryComponent categories={categories} />}
      </div>
    )
  }
}

Article.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.object,
  clickableCategories: PropTypes.bool,
  id: PropTypes.number,
  openDeleteArticleConfirmationDialog: PropTypes.func.isRequired,
  publishedAt: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Article.defaultProps = {
  categories: [],
  clickableCategories: false,
  id: 0,
  publishedAt: '',
}

const styles = createStyleSheet('Article', () => ({
  container: {
    paddingBottom: 16,
    '&:not(:last-child)': {
      borderBottom: '1px solid #CBCED3',
    },
  },
  delete: {
    float: 'right',
  },
}))

export default connect(null, {
  openDeleteArticleConfirmationDialog,
})(withStyles(styles)(Article))
