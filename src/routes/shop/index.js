import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import GoodsCard from './components/goodsCard'
import styles from './index.less'

const Shop = ({ dispatch, location, shop, loading }) => {
  console.log(loading)
  const { list, pagination } = shop
  const { query = {}, pathname } = location
  const listProps = {
    dataSource: list,
    loading: loading.effects['shop/query'],
    pagination,
    location,
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          classID: page,
        },
      }))
    },
  }
  return (
    <Page inner>
      <div className={styles.container}>
        <h1>华都商贸</h1>
        <GoodsCard {...listProps} />
      </div>
    </Page>
  )
}
Shop.propTypes = {
  shop: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ shop, loading }) => ({ shop, loading }))(Shop)
