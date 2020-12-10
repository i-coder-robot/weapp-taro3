import { bindActionCreators } from 'redux'
import {
  NAV,
  SUBNAV,
} from '../constants/home'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

// 请求subNav
export const SubNavList = createApiAction(SUBNAV, params => api.get('/subnav', params))

export const NavList = createApiAction(NAV, params=>api.get('/nav',params))
export default bindActionCreators({
  GetSubNavList: SubNavList,
  GetNavList:NavList,
}, store.dispatch)


