import React, {Component} from 'react'
import {View, Text, Image} from '@tarojs/components'
import './guess.scss'
import MyAction from "../../actions/counter";
import {base_host} from "../../constants/api";


export default class Guess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessList: []
        }

        MyAction.GetGuessList({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    guessList: res.data.items,
                })
            }
        })
    }

    render() {

        return (
            <View>
                <View className='guessHead'><Text>猜你喜欢</Text></View>
                <View className='guessList'>
                    {
                        this.state.guessList && (
                            this.state.guessList.map(item => (
                                <View className='guessItem' key={item.id}>
                                    <View className='guessLeft'>
                                        <Image className='guessImg' src={base_host+item.src} />
                                    </View>
                                    <View className='guessRight'>
                                        <Text className='guessTitle'>{item.title}</Text>
                                        <Text className='guessDesc'>{item.desc}</Text>
                                        <View className='guessRightBottom'>
                                            <Text className='guessGoodPrice'>￥{item.goodPrice}</Text>
                                            <Text className='guessPrice'>￥{item.price}</Text>
                                            <Text className='guessSoldNum'>已售{item.soldNum}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )
                    }
                </View>
            </View>
        )
    }

}


