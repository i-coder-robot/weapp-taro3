import React from 'react'
import {View} from '@tarojs/components'
import Team from '../team/index'
import Rush from '../rush/index'
import './ad.scss'

function AD () {
  return(
    <View className='adRow'>
      <Team />
      <Rush />
    </View>
  )
}
export default AD
