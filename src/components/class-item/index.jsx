import React,{Component} from "react";
import {Image, View} from '@tarojs/components'
import './class-item.scss'
import {base_host} from "../../constants/api";


export default  class ClassItem extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item
        return (
            <View className='classItem'>
                <View><Image className='classItemSrc' src={base_host + item.src} /></View>
                <View className='classItemTitle'>{item.title}</View>
                <View className='classItemDesc'>{item.desc}</View>
            </View>
        )
    }
}
