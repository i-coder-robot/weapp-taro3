import React, {Component} from "react";
import {View, Text, Image} from '@tarojs/components'

import './me-item.scss'
import {base_host} from "../../constants/api";

export default class MeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const meItem = this.props.Item
        return (
            <View className='meItem'>
                <View>
                    <Image src={base_host + meItem.src} className='meItemSrc' />
                </View>
                <View>
                    <Text className='meItemTitle'>{meItem.title}</Text>
                </View>
            </View>
        )
    }


}
