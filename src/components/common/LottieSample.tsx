import { View, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
const LottieSample = () => {
    const animation = useRef(null);
    return (
      <View style={styles.container}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'transparent',
          }}
          source={require('../../../assets/lottie_files/Paybills.json')}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})
export default LottieSample