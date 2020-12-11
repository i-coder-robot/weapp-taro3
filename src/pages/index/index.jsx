import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtTabBar} from "taro-ui";
import "taro-ui/dist/style/components/tab-bar.scss" // 按需引入
import './index.scss'
import Nav from "../../components/nav";
import Search from "../../components/search";
import Banner from "../../components/banner";
import Guess from "../../components/guess";
import AD from "../../components/ad";


export default class Index extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    constructor(props) {
        super(props);
        this.state = {
            bottomCurrent: 0,
            tabList: [
                {title: '首页', iconType: 'folder'},
                {title: '找优惠', iconType: 'sketch'},
                {title: '找好店', iconType: 'bookmark'},
                {title: '我的', iconType: 'user'}
            ],
        }
    }

    render() {
        function handleBottomNavClick(value) {
            console.log(`index handleBottomNavClick ${value}`)
            if (value == 1) {
                console.log("111")
                Taro.redirectTo({url: '/pages/discount/index',})
            } else if (value == 2) {
                console.log("222")
                Taro.redirectTo({url: '/pages/restaurant/index'})
            } else if (value == 3) {
                console.log("333")
                Taro.redirectTo({url: '/pages/me/index'})
            }
        }

        return (
            <View className='index'>
                <Search />
                <Nav />
                <Banner />
                <AD />
                <Guess />
                <AtTabBar fixed selectedColor='#fc673d' tabList={this.state.tabList} onClick={handleBottomNavClick} current={this.state.bottomCurrent} />
            </View>
        )
    }
}
