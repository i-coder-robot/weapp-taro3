import React, {Component} from 'react'
import {View,Image,Text} from '@tarojs/components'
import MyAction from '../../actions/counter'
import './subnav.scss'


export default class  SubNav  extends Component {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props)
    this.state = {}
    const data = MyAction.GetSubNavList(this.state)
    console.log(data)
  }

  render () {
    return (
      <View className='subNav'>
        <Text>SubNav Page</Text>
        {/*{*/}
        {/*  status===SUCCESS && (response&&response.data.items.map(item=>(*/}
        {/*    <View key={item.id} className='subNavItem'>*/}
        {/*      <Image className='subNavImg' src={item.src} />*/}
        {/*      <Text className='subNavTitle'>{item.title}</Text>*/}
        {/*    </View>*/}
        {/*  )))*/}
        {/*}*/}
      </View>
    )
  }
}
