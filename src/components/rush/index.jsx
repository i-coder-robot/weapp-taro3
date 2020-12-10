import React, {Component} from 'react'
import {View, Text, Image} from "@tarojs/components";
import './rush.scss'
import MyAction from "../../actions/counter";
import {base_host} from "../../constants/api";

export default class  Rush  extends Component  {

  constructor(props) {
    super(props);
    this.state={
      rush:{}
    }
    MyAction.GetRush({}).then(res => {
      console.log(res.data.item)
      if (res.statusCode === 200) {
        this.setState({
          rush: res.data.item,
        })
      }
    })
  }

  render() {
    return (
        <View className='rushItem'>
          {
            this.state.rush && (
              <View>
                <View className='rushHeadItem'>
                  <View className='rushHead'>
                    <Text>{this.state.rush.keyWord1}</Text>
                    <Text>{this.state.rush.keyWord2}</Text>
                    <Text className='rushHead2'>{this.state.rush.keyWord3}</Text>
                    <Text>{this.state.rush.keyWord4}</Text>
                  </View>
                  {/*<View className='rushTimeItem'>*/}
                  {/*  <Text className='rushTime'>{this.state.rush.rushTime}</Text>*/}
                  {/*  <Text className='rushTimeSymbol'>{this.state.rush.rushTimeSymbol}</Text>*/}
                  {/*  <Text className='rushTime'>{this.state.rush.rushTime1}</Text>*/}
                  {/*  <Text className='rushTimeSymbol'>{this.state.rush.rushTimeSymbol}</Text>*/}
                  {/*  <Text className='rushTime'>{this.state.rush.rushTime2}</Text>*/}
                  {/*</View>*/}
                </View>
                <Image className='rushImg' src={base_host + this.state.rush.img} />
                <View>
                  <Text className='rushTitle'>{this.state.rush.foodName}</Text>
                </View>
                <View className='rushDesc'>
                  <Image className='rushIcon' src={base_host + this.state.rush.icon} />
                  <Text className='rushHotelName'>{this.state.rush.hotelName}</Text>
                  <Text className='distance'>{this.state.rush.distance}</Text>
                </View>
                <View className='rushBottom'>
                  <Text className='rushPrice'>￥{this.state.rush.goodPrice}</Text>
                  <Text className='rushOriginPrice'>￥{this.state.rush.price}</Text>
                </View>
              </View>
          )}

        </View>
    )
  }
}
