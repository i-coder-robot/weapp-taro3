import React from 'react'
import {View, Image} from '@tarojs/components'
import './banner.scss'

function Banner () {
  return (
    <View className='banner'>
      <Image className='bannerImg' src='http://localhost:9090/v1/dp/image?imageName=banner' />
    </View>
  )
}
export default Banner
