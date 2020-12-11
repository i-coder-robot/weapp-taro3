import React,{Component} from "react";
import {View, ScrollView} from '@tarojs/components'
import ScrollItem from '../scroll-item'
import './scroll-list.scss'
import MyAction from "../../actions/counter";


export default class ScrollList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantNavList: []
        }
        MyAction.GetRestaurantNavList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    restaurantNavList: res.data.items,
                })
            }
        })
    }

    render() {
        return (
            <View className='scrollList'>
                <View className='scrollHead'>美食排行榜</View>
                <ScrollView scrollX scrollWithAnimation lowerThreshold='10' upperThreshold='10' style='width:100%; height: 120px;'>
                    {
                        this.state.restaurantNavList && this.state.restaurantNavList.map(item => (
                            <ScrollItem key={item.id} Item={item} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
