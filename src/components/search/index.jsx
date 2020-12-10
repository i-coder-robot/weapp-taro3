import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtIcon, AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/search-bar.scss";
import './search.scss'


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTxt: "输入商户名、地点、找优惠"
        }
    }

    setSearchWord (value) {
        this.setState({
            inputTxt: value
        })
    }
    render() {
        return (
            <View className="searchRow">
                <View className='pos'>
                    <Text>北京</Text>
                    <AtIcon value='chevron-down' size='16' color='#000'></AtIcon>
                </View>
                <View className='searchBar'>
                    <AtSearchBar value={this.state.inputTxt} onChange={this.setSearchWord} />
                </View>
            </View>
        )
    }


}

