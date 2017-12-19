import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import { config } from 'utils'
import styles from './Layout.less'
import Menus from './Menu'

const Sider = ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {
  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div>
      <div className={styles.logo}>
        {siderFold ? <img alt={'logo1'} src={config.logo1} style={{ width: '37px', height: '32px' }} /> : <img alt={'logo'} src={config.logo} />}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />主题切换</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="暗" unCheckedChildren="亮" />
      </div> : ''}
    </div>
  )
}

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Sider
