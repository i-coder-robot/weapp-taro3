import React,{Component} from 'react'
import {Image, View, Text} from '@tarojs/components'
import './discount-item.scss'
import {base_host} from "../../constants/api";


export default class DiscountItem extends Component{

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const item  = this.props.item
    return(
        <View className='discountItem'>
          <Image src={base_host + item.discountItemSrc} className='discountItemSrc'></Image>
          <View className='discountItemBelow'>
            <View className='discountItemTitle'>{item.discountItemTitle}</View>
            <View className='discountItemMid'>
              <Image src={base_host + item.discountItemIcon} className='discountItemIcon'></Image>
              <Text className='discountItemHotel'>{item.discountItemHotel}</Text>
            </View>
            <View className='discountItemBottom'>
              <View className='bottomPrice'>
                <Text className='discountItemGoodsPrice'>￥{item.discountItemGoodsPrice}</Text>
                <Text className='discountItemPrice'>￥{item.discountItemPrice}</Text>
              </View>
              <Text className='discount'>{item.discount}</Text>
            </View>
          </View>
        </View>
    )
  }
}
