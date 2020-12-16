import React, {Component} from 'react'
import {View} from '@tarojs/components'
import MyAction from "../../actions/counter";
import Team from '../team/index'
import Rush from '../rush/index'
import './ad.scss'

export default class AD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: null
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
            <View className='adRow'>
                {
                    this.state.team && (
                        <Team team={this.state.team} />
                    )
                }
                <Rush />
            </View>
        )
    }
}
