import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Detail = ({ postDetail }) => {
  const { data } = postDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (
    <div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  )
}

Detail.propTypes = {
  postDetail: PropTypes.object,
}

export default connect(({ postDetail, loading }) => ({ postDetail, loading: loading.models.postDetail }))(Detail)
