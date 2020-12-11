import React,{Component} from "react";
import {Image, View} from '@tarojs/components'
import './class-item.scss'


export default  class ClassItem extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item
        return (
            <View className='classItem'>
                <View><Image className='classItemSrc' src={item.src} /></View>
                <View className='classItemTitle'>{item.title}</View>
                <View className='classItemDesc'>{item.desc}</View>
            </View>
        )
    }
}
