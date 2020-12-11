import React, {Component} from 'react'
import {View} from '@tarojs/components'

import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss" // 按需引入
import './tabs.scss'
import TabsLeft from "./tabs-left";

export default class  MyTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList:[{ title: '附近上榜' }, { title: '全域上榜' }],
            current:0
        }
    }

    render() {
        function setCurrent(value){
            console.log(value)
        }
        return(
            <AtTabs current={this.state.current} tabList={this.state.tabList} onClick={(value)=>setCurrent(value)} >
                <AtTabsPane current={this.state.current} index={0} >
                    <TabsLeft />
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                    <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}
