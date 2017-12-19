import React from 'react'
import { Table } from 'antd'
import { Link } from 'dva/router'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  const columns = [
    {
      title: '图片',
      dataIndex: 'image',
      className: styles.image,
      width: 64,
      render: text => <img alt="Feture" width={26} src={text} />,
    }, {
      title: '主题',
      dataIndex: 'title',
      render: (text, record) => <Link to={`post/${record.id}`}>{text}</Link>,
    }, {
      title: '作者',
      dataIndex: 'author',
    }, {
      title: '类别',
      dataIndex: 'categories',
    }, {
      title: '标记',
      dataIndex: 'tags',
    }, {
      title: '可见范围',
      dataIndex: 'visibility',
    }, {
      title: '评论',
      dataIndex: 'comments',
    }, {
      title: '关注',
      dataIndex: 'views',
    }, {
      title: '日期',
      dataIndex: 'date',
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
