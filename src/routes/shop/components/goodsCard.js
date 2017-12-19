import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Pagination, Card } from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
import styles from './goodsCard.less'
// import Link from "react-draft-wysiwyg/src/controls/Link/index";

const GoodsCard = ({ dispatch, onChange, ...dataProps }) => {
  console.log(dataProps)
  const showTotal = (total) => {
    return `共 ${total} 条`
  }
  // const handleDetail = (classID) => {
  //   console.log(classID)
  //   dispatch(routerRedux.push({
  //     pathname: 'shop/2',
  //     payload: {
  //       classID: 2,
  //     },
  //   }))
  // }
  return (
    <div>
      <Row gutter={24}>
        {
          dataProps.dataSource ? (
            dataProps.dataSource.map((app, i) => {
              return (
                <Col key={i} sm={12} md={8} lg={6} xl={4} style={{ paddingLeft: 0, cursor: 'pointer' }}>
                  <Card key={i} className={styles.section} bodyStyle={{ padding: 0 }}>
                    <div className={styles.customImage}>
                      <Link to={`shop/${app.classID}`}><img alt="example" width="100%" src={app.goodsListImg} /></Link>
                    </div>
                    <div className={styles.customCard}>
                      <h3>{app.goodsName}</h3>
                      <p>￥{app.price}</p>
                    </div>
                  </Card>
                </Col>
              )
            })
          ) : null
        }
      </Row>
      <Pagination onChange={onChange} total={60} className={styles.page} showTotal={showTotal} />
    </div>
  )
}
GoodsCard.propTypes = {
  handleDetail: PropTypes.func,
  onChange: PropTypes.func,
  dispatch: PropTypes.func,
  location: PropTypes.object,
}

export default connect(({ shopDetail }) => ({ shopDetail }))(GoodsCard)
