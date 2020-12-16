import React,{Component} from 'react'
import {View, Image} from '@tarojs/components'
import './banner.scss'
import {base_host} from "../../constants/api";

export default class Banner extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View className='banner'>
                <Image className='bannerImg' src={base_host+'/image?imageName=banner'} />
            </View>
        )
    }
}
