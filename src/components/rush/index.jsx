import React, {Component} from 'react'
import {View, Text, Image} from "@tarojs/components";
import './rush.scss'
import MyAction from "../../actions/counter";
import {base_host} from "../../constants/api";

export default class  Rush  extends Component  {

  constructor(props) {
    super(props);
    this.state={
      rush:null
    }
    MyAction.GetRush({}).then(res => {
      if (res.statusCode === 200) {
        this.setState({
          rush: res.data.item,
        })
      }
    })
  }

  render() {
    return (
        <View className='item'>
          {
            this.state.rush && (
              <View>
                <View className='headItem'>
                  <View>
                    <Text>{this.state.rush.keyWord1}</Text>
                    <Text>{this.state.rush.keyWord2}</Text>
                    <Text className='head2'>{this.state.rush.keyWord3}</Text>
                    <Text>{this.state.rush.keyWord4}</Text>
                  </View>
                </View>
                <Image className='img' src={base_host + this.state.rush.src} />
                <View>
                  <Text className='foodName'>{this.state.rush.foodName}</Text>
                </View>
                <View>
                  <Image className='icon' src={base_host + this.state.rush.icon} />
                  <Text className='hotelName'>{this.state.rush.hotelName}</Text>
                </View>
                <View className='bottom'>
                  <Text className='goodPrice'>￥{this.state.rush.goodPrice}</Text>
                  <Text className='price'>￥{this.state.rush.price}</Text>
                </View>
              </View>
          )}

        </View>
    )
  }
}
