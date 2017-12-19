import { request } from 'utils'

// const { api } = config
// const { shop } = api

export async function query (params) {
  return request({
    url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
    method: 'get',
    data: params,
  })
}
