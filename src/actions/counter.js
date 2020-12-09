import { bindActionCreators } from 'redux'
import {
  LIST,
} from '../constants/home'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

// 请求api
export const SubNavList = createApiAction(LIST, params => api.get('/subnav', params))
export default bindActionCreators({
  GetSubNavList: SubNavList,
}, store.dispatch)
