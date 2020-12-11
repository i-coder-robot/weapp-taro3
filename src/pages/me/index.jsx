import React,{Component} from "react";
import Taro from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import {AtTabBar} from "taro-ui";
import MyAction from "../../actions/counter";
import MeItem from "./me-item";

import {base_host} from "../../constants/api";
import './me.scss'

export default class Me extends Component{
  constructor(props) {
    super(props);
    console.log("Me Page constructor")
    this.state={
      bottomCurrent:3,
      tabList:[
        { title: '首页',iconType:'folder'},
        { title: '找优惠',iconType:'sketch'},
        { title: '找好店',iconType:'bookmark'},
        { title: '我的',iconType:'user'}
      ],
      meItem:{}
    }

    // eslint-disable-next-line import/no-named-as-default-member
    MyAction.Me({}).then(res => {
      if (res.statusCode === 200) {
        this.setState({
          meItem: res.data.item,
        })
      }
    })
  }

  render() {
    const handleBottomNavClick=(value)=>{
      console.log(`Me Page handleBottomNavClick ${value}`)
      if (value==0){
        Taro.navigateTo({url: '/pages/home/index'})
      }
      else if(value==1){
        Taro.navigateTo({url:'/pages/discount/index'})
      }
      else if(value==2){
        Taro.navigateTo({url:'/pages/restaurant/index'})
      }
    }

    return(
        <View className='me'>
          {this.state.meItem &&(
              <View>
                <View className='firstLine'>
                  <View className='firstLineLeft'>
                    <View className='meIconBg'>
                      <Image src={base_host + this.state.meItem.headPic} className='meIcon' />
                    </View>
                    <View>
                      <View className='profile'>
                        <View><Text className='userName'>欢喜哥</Text></View>
                        <View className='level'><Text>Lv2</Text></View>
                      </View>
                      <View className='profileSex'>北京 男</View>
                    </View>
                  </View>
                  <View>
                    <Text className='homepage'>个人主页</Text>
                    <Image src={base_host + this.state.meItem.arrow} className='arrow' />
                  </View>
                </View>
                <View className='meHead'>
                  <View className='secondLine'>
                    <View className='secondLineLeft'>
                      <View className='card'>
                        <View>
                          <Image className='profile' src={base_host + this.state.meItem.profile} />
                        </View>
                        <View className='words'>
                          <Text className='mingpian'>我的点评名片</Text>
                          <Text className='morePeople'>让更多人认识你</Text>
                        </View>
                      </View>
                      <View className='fensi'><Text>粉丝 2 |</Text></View>
                    </View>
                    <View className='codeArea'>
                      <Image className='code' src={base_host + this.state.meItem.myCode} />
                      <Image className='arrow' src={base_host + this.state.meItem.arrow} />
                    </View>
                  </View>
                </View>
                <View>
                  <View className='titleHead'>我的订单</View>
                  <View className='myOrders'>
                    {
                      this.state.meItem.items1.map(item=>(
                          <MeItem key={item.id} Item={item} />
                      ))
                    }
                  </View>
                  <View className='titleHead'>必备工具</View>
                  <View className='myOrders'>
                    {
                      this.state.meItem.items2.map(item=>(
                          <MeItem key={item.id} Item={item} />
                      ))
                    }
                  </View>
                </View>
                <View className='meOthers'>
                  <View className='meItemRow'>
                    <Text>优惠券</Text>
                    <Image className='rightArrow' src={base_host + this.state.meItem.arrow} />
                  </View>
                  <View className='meItemRow'>
                    <Text>收藏</Text>
                    <Image className='rightArrow' src={base_host + this.state.meItem.arrow} />
                  </View>
                  <View className='meItemRow'>
                    <View className='settings'>
                      <Text>设置</Text>
                      <Text className='modifyMobile'>修改手机号</Text>
                    </View>
                    <Image className='rightArrow' src={base_host + this.state.meItem.arrow} />
                  </View>
                  <View className='meItemRow'>
                    <Text>意见反馈</Text>
                    <Image className='rightArrow' src={base_host + this.state.meItem.arrow} />
                  </View>
                </View>
                <AtTabBar fixed selectedColor='#fc673d' tabList={this.state.tabList} onClick={handleBottomNavClick} current={this.state.bottomCurrent} />
              </View>
          )}
        </View>
    )
  }
}
