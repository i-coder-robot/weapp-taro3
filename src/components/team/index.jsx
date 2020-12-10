import React, {Component} from 'react'
import {View, Text, Image} from "@tarojs/components";
import './team.scss'
import MyAction from "../../actions/counter";
import {base_host} from "../../constants/api";


export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {}
        }
        MyAction.GetTeam({}).then(res => {
            if (res.statusCode === 200) {
                this.setState({
                    team: res.data.item,
                })
            }
        })
    }


    render() {
        return (
            <View className='teamItem'>
                {

                    this.state.team && (
                        <View>
                            <View className='teamHeadItem'>
                                <Text>{this.state.team .keyWord1}</Text>
                                <Text>{this.state.team .keyWord2}</Text>
                                <Text className='head2'>{this.state.team .keyWord3}</Text>
                                <Text>{this.state.team .keyWord4}</Text>
                            </View>
                            <Image className='teamImg' src={base_host + this.state.team .img} />
                            <View>
                                <Text className='foodName'>{this.state.team .foodName}</Text>
                            </View>
                            <View>
                                <Image className='teamIcon' src={base_host + this.state.team .icon} />
                                <Text className='teamHotelName'>{this.state.team .hotelName}</Text>
                            </View>
                            <View className='teamBottom'>
                                {/*<Text className='teamPersons'>{this.state.team .joinPersons}</Text>*/}
                                <Text className='teamPrice'>￥{this.state.team .goodPrice}</Text>
                                <Text className='price'>￥{this.state.team .price}</Text>
                            </View>
                        </View>
                    )
                }

            </View>
        )
    }
}
