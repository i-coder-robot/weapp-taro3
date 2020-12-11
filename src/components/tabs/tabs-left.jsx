import React, {Component} from 'react'
import {View,} from '@tarojs/components'
import './tabs-left.scss'
import TabsItem from "./tabs-item";
import MyAction from "../../actions/counter";

export default class TabsLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantTabLeftList: []
        }

        MyAction.GetRestaurantTabList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    restaurantTabLeftList: res.data.items,
                })
            }
        })
    }

    render() {
        return (
            <View className='tabs-left'>
                {
                    this.state.restaurantTabLeftList && this.state.restaurantTabLeftList.map(item => (
                        <TabsItem key={item.id} Item={item} />
                    ))
                }
            </View>
        )
    }
}
