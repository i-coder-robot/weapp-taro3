import { Component } from 'react'
import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/me/index',
      'pages/index/index',
      'pages/restaurant/index',
      'pages/discount/index',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
