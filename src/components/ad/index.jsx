import React,{Component} from 'react'
import {View} from '@tarojs/components'
import Team from '../team/index'
import Rush from '../rush/index'
import './ad.scss'

export default class AD extends Component {
    render() {
        return (
            <View className='adRow'>
                <Team />
                <Rush />
            </View>
        )
    }
}
