import { StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Animated, {useAnimatedStyle, interpolateColor,useDerivedValue, withSpring} from 'react-native-reanimated'

const KeyBordIndicator = ({active=false}:{active:boolean}) => {

  const sharedValue=useDerivedValue(()=>{
      return active==true?withSpring(1):withSpring(0)
    },[active])

    const reanimtedStyle=useAnimatedStyle(()=>{
    const backGroud=interpolateColor(sharedValue.value,[0,1],['#ffffff','#06283D'])
       return {
        backgroundColor:backGroud
       }
})
  return (
    <Animated.View style={[styles.indicator,reanimtedStyle]}></Animated.View>
  )
}

const styles = StyleSheet.create({
    indicator:{
        width:16,
        height:16,
        borderRadius:16,
        borderWidth:1,
        borderColor:Colors.light.border,
        marginRight:16,
      }
})
export default KeyBordIndicator