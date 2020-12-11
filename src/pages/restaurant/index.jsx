import React, {Component} from "react";
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtTabBar} from "taro-ui";
import ScrollList from '../../components/scroll-list'
import ClassList from "../../components/class-list";
import MyTabs from "../../components/tabs";
import './restaurant.scss'

export default class Restaurant extends Component{
  constructor(props) {
    super(props);
    this.state={
      bottomCurrent:2,
      tabList:[
        { title: '首页',iconType:'folder'},
        { title: '找优惠',iconType:'sketch'},
        { title: '找好店',iconType:'bookmark'},
        { title: '我的',iconType:'user'}
      ]
    }
  }

  render() {
    const handleBottomNavClick=(value)=>{
      console.log(`Restaurant Page handleBottomNavClick ${value}`)

      if (value==0){
        Taro.navigateTo({url: '/pages/home/index'})
      }
      else if(value==1){
        Taro.navigateTo({url:'/pages/discount/index'})
      }
      else if(value==3){
        Taro.navigateTo({url:'/pages/me/index'})
      }
    }

    return(
        <View>
          <ScrollList />
          <ClassList />
          <MyTabs />
          <AtTabBar fixed selectedColor='#fc673d' tabList={this.state.tabList} onClick={handleBottomNavClick} current={this.state.bottomCurrent} />
        </View>
    )
  }

}
