import React from 'react'
import {View, Text, Image} from "@tarojs/components";
import './team.scss'
import {base_host} from "../../constants/api";


export default class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.state.team)
        const item = this.props.team
        let {src,icon} = this.props.team
        let teamPic = base_host+src
        let iconSrc = base_host+icon
        return (
            <View className='Item'>
                    <View>
                        <View className='headItem'>
                            <Text>{item.keyWord1}</Text>
                            <Text>{item.keyWord2}</Text>
                            <Text className='head2'>{item.keyWord3}</Text>
                            <Text>{item.keyWord4}</Text>
                        </View>
                        <Image src={teamPic} className='img'></Image>
                        <View>
                            <Text className='foodName'>{item.foodName}</Text>
                        </View>
                        <View>
                            <Image className='icon' src={iconSrc} />
                            <Text className='hotelName'>{item.hotelName}</Text>
                        </View>
                        <View className='bottom'>
                            <Text className='goodPrice'>￥{item.goodPrice}</Text>
                            <Text className='price'>￥{item.price}</Text>
                        </View>
                    </View>
            </View>
        )
    }
}
