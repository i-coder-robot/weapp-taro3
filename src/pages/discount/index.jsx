import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {AtTabBar} from "taro-ui";
import "taro-ui/dist/style/components/tab-bar.scss" // 按需引入
import { View } from '@tarojs/components'
import DiscountLeft from "../../components/discount-left";
import DiscountRight from "../../components/discount-right";
import './index.scss'

export default class Discount extends Component{

  constructor(props) {
    super(props);
    this.state={
      bottomCurrent:1,
      tabList:[
        { title: '首页',iconType:'folder'},
        { title: '找优惠',iconType:'sketch'},
        { title: '找好店',iconType:'bookmark'},
        { title: '我的',iconType:'user'}
      ]
    }
  }
  render() {
    function setBottomCurrent (value){
        console.log(value)
    }
    const handleBottomNavClick=(value)=>{
      setBottomCurrent(value)
      if (value==0){
        Taro.navigateTo({url: '/pages/index/index'})
      } else if(value==2){
        Taro.navigateTo({url:'/pages/restaurant/index'})
      } else if(value==3){
        Taro.navigateTo({url:'/pages/me/index'})
      }
    }

    return(
        <View className='discount'>
          <DiscountLeft />
          <DiscountRight />
          <AtTabBar fixed selectedColor='#fc673d' tabList={this.state.tabList} onClick={handleBottomNavClick} current={this.state.bottomCurrent} />
        </View>
    )
  }
}
