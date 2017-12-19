import modelExtend from 'dva-model-extend'
import { query } from 'services/shops'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'shop',
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/shop') {
          const payload = location.query
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },
  effects: {
    * query ({ payload = {} }, { call, put }) {
      const data = yield call(query, payload)
      console.log(data)
      if (data) {
        yield put({
          type: 'updateState',
          payload: {
            list: data.list,
            pagination: {
              current: Number(payload.page) || 0,
              pageSize: Number(payload.pageSize) || 20,
              total: data.total,
            },
          },
        })
      }
    },
  },
})

