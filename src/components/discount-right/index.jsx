import React,{Component} from 'react'
import {View} from '@tarojs/components'
import DiscountItem from "../discount-item";
import MyAction from "../../actions/counter";

export default class DiscountRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discountRightList: []
        }
        MyAction.GetDiscountRightList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    discountRightList: res.data.items,
                })
            }
        })
    }

    render() {
        return (
            <View className='discountRight'>
                {
                    this.state.discountRightList && this.state.discountRightList.map(item => (
                        <DiscountItem key={item.id} item={item}/>
                    ))
                }
            </View>
        )
    }
}
