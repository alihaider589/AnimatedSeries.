import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Animated } from 'react-native'

export default class Lesson1 extends Component {
    state={
        animation : new Animated.Value(1)
    }
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:0,
            duration:500
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:500
            }).start()
        })
    }
    render() {
        AnimatedStyle ={
            opacity : this.state.animation
        }
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<TouchableWithoutFeedback onPress={this.startAnimation}>
    <Animated.View style={[{height:200,width:200,backgroundColor:"green"},AnimatedStyle]} />
</TouchableWithoutFeedback>
            </View>
        )
    }
}
