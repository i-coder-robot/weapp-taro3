import React, {Component} from 'react'
import {View,Image,Text} from '@tarojs/components'
import MyAction from '../../actions/counter'
import './subnav.scss'
import { base_host } from '../../constants/api'


export default class  SubNav  extends Component {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props)
    this.state = {
      subNavList:[]
    }
    MyAction.GetSubNavList({}).then(res=>{
      console.log(res)
      if (res.statusCode===200){
        this.setState({
          subNavList:res.data.items,
        })
      }
    })

  }

  render () {
    return (
      <View className='subNav'>
        {
          this.state.subNavList && (this.state.subNavList.map(item=>(
            <View key={item.id} className='subNavItem'>
              <Image className='subNavImg' src={base_host+item.src} />
              <Text className='subNavTitle'>{item.title}</Text>
            </View>
          )))
        }
      </View>
    )
  }
}
