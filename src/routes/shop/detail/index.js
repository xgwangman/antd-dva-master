import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Detail = ({ shopDetail }) => {
  const { data } = shopDetail
  console.log(data)
  return (
    <div className="content-inner">
      <h1>年后见覅</h1>
    </div>
  )
}

Detail.propTypes = {
  shopDetail: PropTypes.object,
}

export default connect(({ shopDetail }) => ({ shopDetail }))(Detail)
