import React, {Component} from 'react'
import {View, Image, Text} from '@tarojs/components'
import SubNav from '../subnav'
import './nav.scss'
import MyAction from '../../actions/counter'

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navList: []
        }
        MyAction.GetNavList({}).then(res => {
            console.log(res)
            console.log(res.data.items)
            if (res.statusCode === 200) {
                this.setState({
                    navList: res.data.items,
                })
            }
        })
    }


    render() {
        return (
            <View className='nav'>
                {
                    this.state.navList && this.state.navList.map(item => (
                        <View key={item.id} className='navItem'>
                            <Image className='img' src={item.src} />
                            <Text className='title'>{item.title}</Text>
                        </View>))
                }
                <SubNav />
            </View>
        )
    }
}
