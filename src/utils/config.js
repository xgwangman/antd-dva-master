const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '后台管理系统',
  prefix: '后台管理系统',
  footerText: '后台管理系统  © 2017 xgwangman',
  logo: '/logo.png',
  logo1: '/logo1.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    post: `${APIV1}/post/:id`,
    // shop: `${APIV1}/shop`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
