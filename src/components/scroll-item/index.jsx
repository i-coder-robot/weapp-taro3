import React,{Component} from "react";
import {View,Image} from '@tarojs/components'
import './scroll-item.scss'
import {base_host} from "../../constants/api";



export default class ScrollItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const scrollItem = this.props.Item
        return(
            <View className='scrollItem'>
                <View className='scrollItemTitle'>{scrollItem.title}</View>
                <View className='scrollItemDesc'>{scrollItem.desc}</View>
                <View><Image className='scrollItemImg' src={base_host + scrollItem.src} /></View>
            </View>
        )
    }


}

