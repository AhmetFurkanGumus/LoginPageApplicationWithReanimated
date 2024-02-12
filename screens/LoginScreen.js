import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{FadeIn,FadeInDown,FadeInUp,FadeOut} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <View className='bg-white h-full w-full'>
        <StatusBar style="light" />
        <Image source={require('../assets/images/background.png')} className="h-full w-full absolute" />

        {/* lights*/}
        <View className="flex-row justify-around w-full absolute">
          <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require('../assets/images/light.png')} />
          <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require('../assets/images/light.png')} />
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-48 pb-10">
          {/* Title*/}
          <View className="flex items-center p-10">
            <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
              Login
            </Animated.Text>
          </View>

          {/* Form */}

          <View className="flex items-center mx-4 space-y-4">
            <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/10 p-2 rounded-2xl w-full ">
              <TextInput placeholder='Email' placeholderTextColor={'gray'} />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/10 p-2 rounded-2xl w-full mb-3" >
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
              <TouchableOpacity
                className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                <Text className="text-xl font-bold text-white text-center">Login</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
              <Text>Dont have a account?</Text>
              <TouchableOpacity onPress={()=>navigation.push('SignUp')}>
                <Text className="text-sky-600">SignUp</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  )
}

export default LoginScreen

