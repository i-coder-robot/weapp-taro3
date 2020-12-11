import React,{Component} from 'react'
import {View} from '@tarojs/components'
import DiscountItem from "../discount-item";
import MyAction from "../../actions/counter";

export default class DiscountRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discountList: []
        }
        MyAction.GetDiscountList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    discountList: res.data.items,
                })
            }
        })
    }

    render() {
        return (
            <View className='discountRight'>
                {
                    this.state.discountList && this.state.discountList.map(item => (
                        <DiscountItem key={item.id} item={item} />
                    ))
                }
            </View>
        )
    }
}
