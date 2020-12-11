import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import ClassItem from "../class-item";
import './class-list.scss'
import MyAction from "../../actions/counter";


export default class ClassList extends Component{


  constructor(props) {
      super(props);
      this.state={
          restaurantBillBoardList:[]
      }
      MyAction.GetRestaurantBillBoardList({}).then(res => {
          console.log(res)
          if (res.statusCode === 200) {
              this.setState({
                  restaurantBillBoardList: res.data.items,
              })
          }
      })
  }

    render() {
        return (
            <View>
                <View className='classHead'>精品榜单</View>
                <View className='classList'>
                    {
                        this.state.restaurantBillBoardList && this.state.restaurantBillBoardList.map(item => (
                                <ClassItem key={item.id} item={item} />
                            ))
                    }
                </View>
            </View>
        )
    }


}
