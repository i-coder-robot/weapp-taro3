import { bindActionCreators } from 'redux'
import {
  LIST,
} from '../constants/counter'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'



// 请求api
export const list = createApiAction(LIST, params => api.get('/subnav', params))
export default bindActionCreators({
  list,
}, store.dispatch)
