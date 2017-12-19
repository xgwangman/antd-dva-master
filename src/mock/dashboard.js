import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      '服装|200-500': 1,
      '食品|180-400': 1,
      '电子|300-550': 1,
    },
  ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2,
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1,
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: 'zuiidea',
    email: 'zuiiidea@.gmail.com',
    sales: 3241,
    sold: 3556,
    avatar: 'http://tva4.sinaimg.cn/crop.0.0.996.996.180/6ee6a3a3jw8f0ks5pk7btj20ro0rodi0.jpg',
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date () {
        return `2016-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date () {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: '约翰多伊',
    title: '美术设计师',
    content: '独立的气质是我们内在自主思想和独特个性的外在反映。在今天的社会里，谁都不愿成为人云亦云的庸人。思想的自由和独立的个性，正是区别于一般人的魅力所在，也是一个人是否有创造力的生命源泉。',
    avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: '在线评论',
      number: 2781,
    }, {
      icon: 'team',
      color: color.blue,
      title: '新客户',
      number: 3241,
    }, {
      icon: 'message',
      color: color.purple,
      title: '制定项目',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: '推荐',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {
    res.json(Dashboard)
  },
}