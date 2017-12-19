/* global location */
import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/shop'

export default {

  namespace: 'shopDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        const match = pathToRegexp('/shop/:classID').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query', payload: { classID: match[1] } })
        }
      })
    },
  },

  effects: {
    * query ({
      payload,
    }, { call, put }) {
      console.log('okok')
      const data = yield call(query, payload)
      const { success, message, status, ...other } = data
      console.log(data)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
}
