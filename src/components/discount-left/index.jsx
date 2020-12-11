import React,{Component} from 'react'
import {View} from '@tarojs/components'
import DiscountItem from "../discount-item";
import MyAction from "../../actions/counter";

export default class DiscountLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discountLeftList: []
        }
        MyAction.GetDiscountLeftList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    discountLeftList: res.data.items,
                })
            }
        })
    }

    render() {
        return (
            <View className='discountLeft'>
                {
                    this.state.discountLeftList && this.state.discountLeftList.map(item => (
                        <DiscountItem key={item.id} item={item}/>
                    ))
                }
            </View>
        )
    }

}
