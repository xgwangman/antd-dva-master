import { request, config } from 'utils'

const { api } = config
const { post } = api

export async function query (params) {
  return request({
    url: post,
    method: 'get',
    data: params,
  })
}

