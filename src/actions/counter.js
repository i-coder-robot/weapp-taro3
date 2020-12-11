import { bindActionCreators } from 'redux'
import {
  NAV,
  SUBNAV,
  GUESS,
} from '../constants/home'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

// 请求subNav
export const SubNavList = createApiAction(SUBNAV, params => api.get('/subnav', params))

export const NavList = createApiAction(NAV, params=>api.get('/nav',params))
export const GuessList = createApiAction(GUESS, params=>api.get('/guess',params))
export const Team = createApiAction(GUESS, params=>api.get('/team',params))
export const Rush = createApiAction(GUESS, params=>api.get('/rush',params))
export const restaurantTabList = createApiAction(GUESS, params=>api.get('/restaurantTabItem',params))
export const discountList = createApiAction(GUESS, params=>api.get('/discount',params))
export const restaurantNavList = createApiAction(GUESS, params=>api.get('/restaurantNav',params))
export const restaurantBillBoardList = createApiAction(GUESS, params=>api.get('/restaurantBillBoard',params))
export const Me = createApiAction(GUESS, params=>api.get('/me',params))


export default bindActionCreators({
  GetSubNavList: SubNavList,
  GetNavList:NavList,
  GetGuessList:GuessList,
  GetTeam:Team,
  GetRush:Rush,
  GetRestaurantTabList:restaurantTabList,
  GetDiscountList:discountList,
  GetRestaurantNavList:restaurantNavList,
  GetRestaurantBillBoardList:restaurantBillBoardList,
  Me:Me
}, store.dispatch)


