import React,{Component} from 'react'

import {View, Image} from '@tarojs/components'
import './banner.scss'

export default class Banner extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View className='banner'>
                <Image className='bannerImg' src='http://localhost:9090/v1/dp/image?imageName=banner' />
            </View>
        )
    }
}
