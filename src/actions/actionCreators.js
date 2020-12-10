import store from '../store'
import { createApiAction } from './index'
import { bindActionCreators } from 'redux'
import api from '../service/api'
import {LIST} from "../constants/home";

export const list = createApiAction(LIST, params => {
  // console.log('list',params);
  return api.get('NervJS/taro/issues', params)
})

export default bindActionCreators({
  list,
}, store.dispatch)
